import React, { useState, useEffect } from 'react';
import BestProductItem from './bestProductItem';
import {
  Grid,
  Typography,
} from '@mui/material';
import SubCategories from './SubCategories';
import Brand from './Brand';


export default function BestProducts ({ accueil = [], addToCartHandler }) {

    /*const [products, setProducts] = useState({
    product: []});

    const { product } = products;

    const ref  = accueil.map((acc) => (acc.bestProducts.map((item) => (item._ref))));

    useEffect(() => {
    
    const fetchData = async () => {
      try {

        const product = await client.fetch(           
          `
            *[_type == "product" && _id == $productRef]`, {
                productRef: ref[0], 
            }
        );
        setProducts({product});
      } catch (err) {
        console.error(err.message);
      }
    };
    
    fetchData();
  }, []);*/



  return (
    <div>
      {accueil.map((acc) => (
        <>
          <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>{acc.title}</Typography>
          <Grid container spacing={-2}>

                    {acc.bestProducts.map((item) => (
                        <Grid item md={3}>
                          <BestProductItem itemRef={item._ref} addToCartHandler={addToCartHandler} className="display-flex"/>
                        </Grid>
                    ))}

          </Grid>  
          
          <SubCategories />
          <Brand />

          
        </>
      
      ))}
        
        
    </div>
  )
}
