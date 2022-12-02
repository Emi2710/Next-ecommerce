import React, { useState, useEffect } from 'react';
import BestProductItem from './bestProductItem';
import {
  Grid,
  Typography,
} from '@mui/material';
import SubCategories from './SubCategories';
import Brand from './Brand';
import Discover from './Discover';

import {PortableText as BasePortableText} from '@portabletext/react';



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
                        <Grid item md={3} xs={6}>
                          <BestProductItem itemRef={item._ref} addToCartHandler={addToCartHandler} className="display-flex"/>
                        </Grid>
                    ))}

          </Grid>  
          
          <SubCategories />
          <Brand />

          <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>{acc.secondTitle}</Typography>
          <Grid container spacing={-2}>

            {acc.typeProducts.map((item) => (
                          <Grid item md={3}>
                            <Discover itemRef={item._ref} addToCartHandler={addToCartHandler} className="display-flex"/>
                          </Grid>
            ))} 

          </Grid>

          <Typography sx={{margin: '80px 0', textAlign: 'center'}}><BasePortableText value={acc.contentBody} /></Typography>
                    
          


          
        </>
      
      ))}
        
        
    </div>
  )
}
