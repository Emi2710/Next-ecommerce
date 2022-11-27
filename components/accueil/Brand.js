import React from 'react';
import {
  Grid,
  Typography,
  Box
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';


import brands from '../../utils/brands';

import cecotec from '../../assets/brands/cecotec.png';
import kugoo from '../../assets/brands/kugoo.jpg';
import ninebot from '../../assets/brands/ninebot.jpg';
import skateflash from '../../assets/brands/skateflash.jpg';
import brigmton from '../../assets/brands/brigmton.jpg';
import joyor from '../../assets/brands/joyor.jpg';
import ovex from '../../assets/brands/ovex.jpg';




export default function Brand ()  {
  return (
    <Box>
        <Typography component="h2" variant="h2" sx={{margin: '50px 0'}}>Séléctionner les produits par marque</Typography>
        <Grid sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            
            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[1]}`}>
                    <Image src={cecotec.src} alt={brands[1]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>

            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[5]}`}>
                    <Image src={kugoo.src} alt={brands[5]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>

            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[6]}`}>
                    <Image src={ninebot.src} alt={brands[6]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>
            
            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[8]}`}>
                    <Image src={skateflash.src} alt={brands[8]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>
            
            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[0]}`}>
                    <Image src={brigmton.src} alt={brands[0]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>

            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[3]}`}>
                    <Image src={joyor.src} alt={brands[3]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>
            
            <Box sx={{cursor: 'pointer', marginLeft: '45px'}}>
                <NextLink href={`search?brand=${brands[7]}`}>
                    <Image src={ovex.src} alt={brands[7]}  width='150%' height='150%' objectFit='contain' /> 
                </NextLink>
            </Box>
            
        </Grid>

    </Box>
  )
}
