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
    <Card sx={{boxShadow:"0", backgroundColor:"#fff", marginLeft: "20px", width: '75%'}}>
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
              <Rating value={product.rating} readOnly></Rating>
              <Typography>({product.numReviews})</Typography>
            </Box>
            
            <Typography fontSize="20px"><p className="bold">€{product.price}</p></Typography>
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
