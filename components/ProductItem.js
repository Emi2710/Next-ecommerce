import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';
import classes from '../utils/classes';

export default function ProductItem({ product, addToCartHandler }) {

  return (
    <Card sx={{boxShadow:"0", backgroundColor:"#fff", marginLeft: "20px", width: '75%', marginBottom: '25px'}}>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        
          
        <CardActionArea>

          <CardMedia
            component="img"
            image={urlForThumbnail(product.image[0])}
            title={product.name}
          ></CardMedia>
          
          <CardContent sx={{borderTop: "1px solid #CDCDCD"}}>
            <Typography sx={classes.productName}>{product.name}</Typography>
            <Box sx={{display: 'flex'}}>
              <Rating value={product.rating} size="small" readOnly></Rating>
            </Box>
            
            {product.onSalePrice? (
                        <>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                          <Typography fontSize="14px" sx={{textDecoration: 'line-through', fontWeight: 'bold'}}>€{product.onSalePrice}</Typography>
                          <Typography fontSize="14px" sx={{marginLeft: '12px'}}><p>{product.salePurcent}</p></Typography>  
                        </Box>
                        
                        <Typography fontSize="18px" sx={{color: '#D33636', fontWeight: 'bold', marginTop: '0px', marginBottom: '12px'}}>€{product.price}</Typography>
                        
                        </>
                      ) : (
                        <>
                          <Typography fontSize="18px" sx={{fontWeight: 'bold', margin: '12px 0'}}>€{product.price}</Typography>
                        </>
                      )}
            {product.countInStock > 0 ? <>
              <Button
                  size="small"
                  sx={classes.productItemButton}
                  onClick={() => addToCartHandler(product)}
                  className="add-to-cart-hover"
              >
                  Ajouter au panier
              </Button></> : 'Indisponible'
            }
            

          </CardContent>
        </CardActionArea>
      </NextLink>
      
    </Card>
  );
}
