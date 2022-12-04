import React from 'react';
import {
  Typography,
  Box,
  Grid
} from '@mui/material';
import NextLink from 'next/link';
import classes from '../../utils/classes';

import roues from '../../utils/subCategories/roues';
import pieces from '../../utils/subCategories/pieces';

import appareil from '../../assets/categories/accessoires.jpg';
import adresse from '../../assets/categories/adresse.jpg';
import batteries from '../../assets/categories/batteries.jpg';
import consommables from '../../assets/categories/consommables.jpg';
import eclair from '../../assets/categories/eclair.jpg';
import electronique from '../../assets/categories/electronique.jpg';
import freins from '../../assets/categories/freins.jpg';
import moulures from '../../assets/categories/moulures.jpg';
import personnalisation from '../../assets/categories/personnalisation.jpg';
import pneus from '../../assets/categories/pneus.jpg';
import rouesPleines from '../../assets/categories/roues-pleines.gif';
import suspension from '../../assets/categories/suspension.jpg';


export default function SubCategories () {
  return (
    <div>

      <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>Toutes nos catégories</Typography>
      <Grid sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[0]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${appareil.src})`}]} >
          {roues[0]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[1]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pneus.src})`}]} >
          {roues[1]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Roues&rouesSubCategory=${roues[2]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rouesPleines.src})`}]} >
          {roues[2]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[0]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${batteries.src})`}]} >
          {pieces[0]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[1]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${electronique.src})`}]} >
          {pieces[1]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[2]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${consommables.src})`}]} >
          {pieces[2]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[3]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${adresse.src})`}]} >
          {pieces[3]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[4]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${moulures.src})`}]} >
          {pieces[4]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[5]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${consommables.src})`}]} >
          {pieces[5]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[6]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${freins.src})`}]} >
          {pieces[6]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[7]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${appareil.src})`}]} >
          {pieces[7]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[8]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${personnalisation.src})`}]} >
          {pieces[8]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[9]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${eclair.src})`}]} >
          {pieces[9]} 
          </Box>  
        </NextLink>

        <NextLink href={`search?category=Pièces+de+rechange&piecesSubCategory=${pieces[10]}`}>
          <Box sx={[classes.subCategoriesAccueil, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${suspension.src})`}]} >
          {pieces[10]} 
          </Box>  
        </NextLink>

      </Grid>

    </div>
  )
}

