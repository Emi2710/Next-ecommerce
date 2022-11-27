import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box,
  Grid
} from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import classes from '../../utils/classes';

import roues from '../../utils/subCategories/roues';
import pieces from '../../utils/subCategories/pieces';

import appareil from '../../assets/appareil-photo.jpg';

export default function SubCategories () {
  return (
    <div>

      <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>Toutes nos catégories</Typography>
      <Grid sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[0]}`}>
          <Box sx={classes.subCategoriesAccueil} >
          {roues[0]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[1]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {roues[1]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[2]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {roues[2]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[0]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[0]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[1]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[1]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[2]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[2]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[3]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[3]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[4]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[4]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[5]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[5]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[6]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[6]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[7]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[7]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[8]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[8]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[9]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[9]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[10]}`}>
          <Box sx={classes.subCategoriesAccueil}>
          {pieces[10]} 
          </Box>  
        </NextLink>

      </Grid>

    </div>
  )
}

