import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';
import classes from '../utils/classes';


export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card sx={{boxShadow:"0", backgroundColor:"#fff", marginLeft: "20px"}}>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
            
          ></CardMedia>
          <CardContent sx={{borderTop: "1px solid #CDCDCD"}}>
            <Typography sx={classes.productName}>{product.name}</Typography>
            <Rating value={product.rating} readOnly></Rating>
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
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
