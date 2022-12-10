import {
  Box,
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

import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';


const Success = () => {
  
  const router = useRouter();
  const { id } = router.query;


  const { state } = useContext(Store);
  const { userInfo } = state;

  const paymentSuccess = async () => {
        try {
            await axios.put(
              `/api/orders/${id}/pay`,
              id,
              {
                headers: { authorization: `Bearer ${userInfo.token}` },
              },

              
            );
           
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        paymentSuccess();
    });
  
  return (
    <Layout>
      <Box sx={{textAlign: 'center'}}>
        
        <Typography component="h2" variant="h2">Merci pour votre commande !</Typography>
        <Typography>Votre commande a bien été prise en compte et est en actuellement en cours de préparation.<br /> Vous serez informé de son avancement dans votre espace personnel.</Typography>
        <Link href="/">
          <Button type="button" variant="outlined" sx={{color: "#324D67", border: '1px solid #324D67', marginTop: '25px'}}>
            Continuer le shopping
          </Button>
        </Link>
      </Box>
    </Layout>
  )
}

export default Success