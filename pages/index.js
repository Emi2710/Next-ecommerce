import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import client from '../utils/client';
import { urlForThumbnail } from '../utils/image';
import { Store } from '../utils/Store';
import BestProducts from '../components/accueil/index';

export default function Home() {

  
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });
  const { loading, error } = state;
  
  const [accueilData, setAccueilData] = useState({
    accueil: []
  });

  const { accueil } = accueilData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        const accueil = await client.fetch(`*[_type == "accueil" ]`);

        setState({ products, loading: false });
        setAccueilData({accueil})
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

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
        onSalePrice: product.onSalePrice,
        image: urlForThumbnail(product.image[0]),
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} ajouté au panier`, {
      variant: 'success',
    });
    router.push('/cart');
  };

  return (
    <Layout>
      
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
        
        
        <BestProducts accueil={accueil} addToCartHandler={addToCartHandler} /> 
        
        </>
        
      )}
    </Layout>
  );
}
