import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Rating,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import Layout from '../../components/Layout';
import classes from '../../utils/classes';
import client from '../../utils/client';
import { urlFor, urlForThumbnail } from '../../utils/image';
import { Store } from '../../utils/Store';
import axios from 'axios';
import { useRouter } from 'next/router';
import {PortableText as BasePortableText} from '@portabletext/react';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import BestProductItem from '../../components/accueil/bestProductItem';
import Head from 'next/head';


export default function ProductScreen(props) {

  

  const [index, setIndex] = useState(0);

  const router = useRouter();
  const { slug } = props;
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: '',
  });
  const [productComments, setProductComments] = useState({
    comments: []
  });

  const { product, loading, error } = state;
  const { comments } = productComments;

  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
            *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        const comments = await client.fetch(
          `
            *[_type == "comment" && product._ref == $productId && approved == true]`, {
              productId: product._id,
            }
        );
        
        setState({ ...state, product, loading: false });
        setProductComments({comments});
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    
    fetchData();
  }, []);

  

  
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar('Nous sommes désolés, le produit est en rupture de stock.', { variant: 'error' });
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
        onSalePrice: product.onSalePrice,
        image: urlForThumbnail(product.image[0]),
        quantity,
        currency: product.currency
      },
    });
    enqueueSnackbar(`${product.name} ajouté au panier`, {
      variant: 'success',
    });
    router.push('/cart');
  };

  


  
    

  return (
    <Layout title={product?.title}>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box>
          <Head>
            <title>
              {product.name}
            </title>
            <meta
              name="description"
              content={`${product.seoDescription}`}
              key="desc"
            />
          </Head>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <Typography color="secondary">Revenir en arrière</Typography>
              </Link>
            </NextLink>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
             <div className='image-container'>
                    <img src={urlFor(product.image && product.image[index])} alt={product.name} className='product-detail-image' />
              </div>
              {<div className='small-images-container'>
                    {product.image?.map((item, i) => (
                        <img
                            key={i} 
                            src={urlFor(item)}
                            alt={product.name}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                    </div>} 
                    
              
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h1" variant="h1">
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>Catégorie: {product.category}</ListItem>
                <ListItem>Marque: {product.brand}</ListItem>
                <ListItem>
                  
                  <Rating value={product.rating} readOnly />
                  
                  <Typography sx={classes.smallText}>
                    ({comments.length} avis)
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>Description:<BasePortableText value={product.contentBody} /></Typography> 
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Prix</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>€{product.price}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Statut</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          {product.countInStock > 0
                            ? 'En stock'
                            : 'Indisponible'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    {product.countInStock > 0 ? 
                      <Button
                        onClick={addToCartHandler}
                        fullWidth
                        variant="contained"
                      >
                        Ajouter au panier
                      </Button> : 'En rupture de stock'
                    } 
                    
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{paddingTop: '100px'}}>
            

            
            
            <Comments comments={comments} />
            
            <CommentsForm _id={product._id} />

          </Box>  


          <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>{product.related}</Typography>

          <Grid container spacing={-2}>

                    {product.productsRelated?.map((item) => (
                        <Grid item md={3} xs={6} key={item._ref}>
                          <BestProductItem itemRef={item._ref} addToCartHandler={addToCartHandler} className="display-flex"/>
                        </Grid>
                    ))}

          </Grid>
        </Box>

        
        
      )}
    </Layout>

    
  );

}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}




