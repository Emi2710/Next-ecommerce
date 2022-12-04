import React, { useState, useEffect } from 'react';
import client from '../../utils/client';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box,
} from '@mui/material';
import NextLink from 'next/link';
import { urlForThumbnail } from '../../utils/image';
import classes from '../../utils/classes';


export default function Discover ({itemRef, addToCartHandler}) {

  const [item, setItem] = useState({product: []});

  const { product } = item;

  useEffect(() => {
    
    const fetchItem = async () => {
      try {
        const product = await client.fetch(
          
          `
            *[_type == "product" && _id == $productId]`, {
              productId: itemRef,
            }
        );
        setItem({product});
      } catch (err) {
        console.error(err.message);
      }
    };
    
    fetchItem();
  }, []);


  return (
      <>
        {product?.map((item) => (
              <Card sx={{boxShadow:"0", backgroundColor:"#fff", marginLeft: "20px", width: '75%'}} key={item.slug}>
                
                <NextLink href={`/product/${item.slug.current}`} passHref>
                  
                    
                  <CardActionArea>

                    <CardMedia
                      component="img"
                      image={urlForThumbnail(item.image[0])}
                      title={item.name}
                    ></CardMedia>
                    
                    <CardContent sx={{borderTop: "1px solid #CDCDCD"}}>
                      <Typography sx={classes.productName}>{item.name}</Typography>
                      <Box sx={{display: 'flex'}}>
                        <Rating value={item.rating} size="small" readOnly></Rating>
                      </Box>
                      
                      <Typography fontSize="20px"><p className="bold">€{item.price}</p></Typography>
                      {item.countInStock > 0 ? <>
                        <Button
                            size="small"
                            sx={classes.productItemButton}
                            onClick={() => addToCartHandler(item)}
                            className="add-to-cart-hover"
                        >
                            Ajouter au panier
                        </Button></> : 'Indisponible'
                      }
                      

                    </CardContent>
                  </CardActionArea>
                </NextLink>
                 
              </Card>          

              
           
      ))}
      </>  
   )
}
