import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  MenuItem,
  Rating,
  Select,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import classes from '../utils/classes';
import client from '../utils/client';
import { urlForThumbnail } from '../utils/image';
import { Store } from '../utils/Store';
import brands from '../utils/brands';
import pieces from '../utils/subCategories/pieces';
import roues from '../utils/subCategories/roues';

const prices = [
  {
    name: '€1 à €50',
    value: '1-50',
  },
  {
    name: '€51 to €200',
    value: '51-200',
  },
  {
    name: '€201 to €1000',
    value: '201-1000',
  },
];

const ratings = [1, 2, 3, 4, 5];

export default function SearchScreen() {
  const router = useRouter();
  const {
    category = 'all',
    brand = 'all',
    rouesSubCategory = 'all',
    piecesSubCategory = 'all',
    query = 'all',
    price = 'all',
    rating = 'all',
    sort = 'default',
  } = router.query;
  const [state, setState] = useState({
    categories: [],
    brands: [],
    rouesSubCategory: [],
    piecesSubCategory: [],
    products: [],
    error: '',
    loading: true,
  });

  const { loading, products, error } = state;
  const [categories, setCategories] = useState([]);
  //const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCategories();

   

    const fetchData = async () => {
      try {
        let gQuery = '*[_type == "product"';
        if (category !== 'all') {
          gQuery += ` && category match "${category}" `;
        }
        if (rouesSubCategory !== 'all') {
          gQuery += ` && rouesSubCategory match "${rouesSubCategory}" `;
        }
        if (piecesSubCategory !== 'all') {
          gQuery += ` && piecesSubCategory match "${piecesSubCategory}" `;
        }
        if (brand !== 'all') {
          gQuery += ` && brand match "${brand}" `;
        }
        if (query !== 'all') {
          gQuery += ` && name match "${query}" `;
        }
        if (price !== 'all') {
          const minPrice = Number(price.split('-')[0]);
          const maxPrice = Number(price.split('-')[1]);
          gQuery += ` && price >= ${minPrice} && price <= ${maxPrice}`;
        }
        if (rating !== 'all') {
          gQuery += ` && rating >= ${Number(rating)} `;
        }
        let order = '';
        if (sort !== 'default') {
          if (sort === 'lowest') order = '| order(price asc)';
          if (sort === 'highest') order = '| order(price desc)';
          if (sort === 'toprated') order = '| order(rating desc)';
        }

        gQuery += `] ${order}`;
        setState({ loading: true });

        const products = await client.fetch(gQuery);
        setState({ products, loading: false });
      } catch (err) {
        setState({ error: err.message, loading: false });
      }
    };
    fetchData();
  }, [category, brand, rouesSubCategory, piecesSubCategory, price, query, rating, sort]);

  const filterSearch = ({ category, brand, rouesSubCategory, piecesSubCategory, sort, searchQuery, price, rating }) => {
    const path = router.pathname;
    const { query } = router;
    if (searchQuery) query.searchQuery = searchQuery;
    if (category) query.category = category;
    if (rouesSubCategory) query.rouesSubCategory = rouesSubCategory;
    if (piecesSubCategory) query.piecesSubCategory = piecesSubCategory;
    if (brand) query.brand = brand;
    if (sort) query.sort = sort;
    if (price) query.price = price;
    if (rating) query.rating = rating;

    router.push({
      pathname: path,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const piecesHandlerSmall = (e) => {
    filterSearch({ piecesSubCategory: e.target.value });
  };
  const rouesHandler = (e) => {
    filterSearch({ rouesSubCategory: e.target.getAttribute("value") });
  };
  const piecesHandler = (e) => {
    filterSearch({ piecesSubCategory: e.target.getAttribute("value") });
  };
  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  const ratingHandler = (e) => {
    filterSearch({ rating: e.target.value });
  };

  const {
    state: { cart },
    dispatch,
  } = useContext(Store);

  const { enqueueSnackbar } = useSnackbar();
  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar('Nous sommes désolés, le produit est en rupture de stock', { variant: 'error' });
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        _key: product._id,
        name: product.name,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: product.price,
        image: urlForThumbnail(product.image),
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} ajouté au panier`, {
      variant: 'success',
    });
    router.push('/cart');
  };

  return (
    <Layout title="search">
      <Grid sx={classes.section} container spacing={2}>
        <Grid item md={3}>
          <List>
            <ListItem>
              <Box sx={{width: '250px'}}>
                <Typography>Catégories</Typography>
                <Select fullWidth value={category} onChange={categoryHandler}>
                  <MenuItem value="all">Tout</MenuItem>
                  {categories &&
                    categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            {category == 'Pièces de rechange' && 
              <ListItem> 
                <Box sx={{width: '250px', display: {xs: 'block', md: 'none'}}}>
                  <Typography>Sous-catégories</Typography>
                  <Select fullWidth value={pieces} onChange={piecesHandlerSmall}>
                    <MenuItem value="all">Tout</MenuItem>
                    {pieces &&
                      pieces.map((piece) => (
                        <MenuItem key={piece} value={piece}>
                          {piece}
                        </MenuItem>
                      ))}
                  </Select>
                </Box>
              </ListItem>
            }
            
            
            
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Marques</Typography>
                <Select fullWidth value={brand} onChange={brandHandler}>
                  <MenuItem value="all">Tout</MenuItem>
                  {brands &&
                    brands.map((brand) => (
                      <MenuItem key={brand} value={brand}>
                        {brand}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Prix</Typography>
                <Select value={price} onChange={priceHandler} fullWidth>
                  <MenuItem value="all">Tout</MenuItem>
                  {prices.map((price) => (
                    <MenuItem key={price.value} value={price.value}>
                      {price.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Avis</Typography>
                <Select value={rating} onChange={ratingHandler} fullWidth>
                  <MenuItem value="all">Tout</MenuItem>
                  {ratings.map((rating) => (
                    <MenuItem dispaly="flex" key={rating} value={rating}>
                      <Rating value={rating} readOnly />
                      <Typography component="span">&amp; plus</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
          </List>
          
        </Grid>
        <Grid item md={9}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {products && products.length !== 0 ? products.length : 'Pas de'}{' '}
              Résultats
              {query !== 'all' && query !== '' && ' : ' + query}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              {(query !== 'all' && query !== '') ||
              rating !== 'all' ||
              price !== 'all' ? (
                <Button onClick={() => router.push('/search')}>X</Button>
              ) : null}
            </Grid>

            <Grid item>
              <Typography component="span" sx={classes.sort}>
                Trier par
              </Typography>
              <Select value={sort} onChange={sortHandler}>
                <MenuItem value="default">Défaut</MenuItem>
                <MenuItem value="lowest">Prix: plus petit au plus grand</MenuItem>
                <MenuItem value="highest">Prix: plus grand au plus petit</MenuItem>
                <MenuItem value="toprated">Avis des utilisateurs</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid sx={classes.section} container spacing={3}>
            {category == 'Pièces de rechange' && 

              
                <Grid value={piecesSubCategory} onClick={piecesHandler} sx={{flexWrap: 'wrap', padding: '12px', display: {xs: 'none', md: 'flex'}}}>
                  {pieces &&
                    pieces.map((piece) => (
                      <Box key={piece} value={piece} sx={classes.subCategoryCard}>
                        {piece}
                      </Box>
                      
                    ))}
                    <Box value='all' sx={classes.subCategoryCard}>
                        Tout
                      </Box>
                </Grid>
            }
            {category == 'Roues' && 

              
                <Grid value={rouesSubCategory} onClick={rouesHandler} sx={{display: 'flex', flexWrap: 'wrap', padding: '12px'}}>
                  {roues &&
                    roues.map((roue) => (
                      <Box key={roue} value={roue} sx={classes.subCategoryCard}>
                        {roue}
                      </Box>
                      
                    ))}
                    <Box value='all' sx={classes.subCategoryCard}>
                        Tout
                      </Box>
                </Grid>
            }
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Alert>{error}</Alert>
            ) : (
              <Grid container>
                
                {products.map((product) => (
                  <Grid item md={4} xs={6} key={product.name}>
                    <ProductItem
                      product={product}
                      addToCartHandler={addToCartHandler}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
