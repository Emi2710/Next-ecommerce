import Image from 'next/image';
import logo from '../assets/logo-escootch.svg';
import cartIcon from '../assets/cart.svg';
import dropdown from '../assets/dropdownsvg.svg';
import dpd from '../assets/dpdblack.svg';

import { createTheme } from '@mui/material/styles';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import client from '../utils/client';
import Footer from './Footer';
import Script from 'next/script';

import roues from '../utils/subCategories/roues';
import pieces from '../utils/subCategories/pieces';





export default function Layout({ title, description, children }) {


const [anchorElRoues, setAnchorElRoues] = useState(null);
  const openRoues = Boolean(anchorElRoues);
  const handleRouesClick = (event) => {
    setAnchorElRoues(event.currentTarget);
  };
  const handleRouesClose = () => {
    setAnchorElRoues(null);
  };

const [anchorElPieces, setAnchorElPieces] = useState(null);
  const openPieces = Boolean(anchorElPieces);
  const handlePiecesClick = (event) => {
    setAnchorElPieces(event.currentTarget);
  };
  const handlePiecesClose = () => {
    setAnchorElPieces(null);
  };

  const [mobileRoues, setMobileRoues] = useState(false);

  function handleMobileRoues () {
    setMobileRoues(!mobileRoues)
  }

  const [mobilePieces, setMobilePieces] = useState(false);

  function handleMobilePieces () {
    setMobilePieces(!mobilePieces)
  }

  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav () {
    setMobileNav(!mobileNav)
  }



  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.8rem',
        fontWeight: 600,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.6rem',
        fontWeight: 600,
        margin: '1rem 0',
        color: "#324D67",
        display: 'flex',
        justifyContent: 'center'
      },
      h3: {
        fontSize: '1.4rem',
        fontWeight: 600,
        margin: '1rem 0',
        color: "#324D67",
        
      },
      

    },

    palette: {
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#324D67',
      },
    },
    
  });


  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    jsCookie.remove('cartItems');
    jsCookie.remove('shippingAddress');
    jsCookie.remove('paymentMethod');
    router.push('/');
  };

  /*const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };*/

  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);

  const [footerData, setFooterData] = useState({
    footer: []
  });

  const { footer } = footerData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        const footer = await client.fetch(`*[_type == "footer" ]`);

        setCategories(data);
        setFooterData({footer});
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    };
    fetchData();
  }, [enqueueSnackbar]);

  const isDesktop = useMediaQuery('(min-width:600px)');

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} - E-scoot` : 'E-scoot'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar} elevation={0}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              
              <NextLink href="/" passHref>
                <Link>
                  <Image src={logo} alt="Logo e-scoot" width='75px' />
                </Link>
              </NextLink>
            </Box>
            
            <Box sx={isDesktop ? classes.visible : classes.hidden}>
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <InputBase
                    name="query"
                    sx={classes.searchInput}
                    placeholder="Rechercher un produit"
                    onChange={queryChangeHandler}
                  />
                  <IconButton
                    type="submit"
                    sx={classes.searchButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </form>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
              
              
              {userInfo ? (
                <>
                
                  
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    sx={classes.navbarButton}
                    onClick={loginClickHandler}
                  >
                    Bonjour {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profil
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Historique de commandes
                    </MenuItem>
                    {userInfo.isAdmin ? (
                     <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/admin')
                      }
                    >
                      Voir toutes les commandes
                    </MenuItem> 
                    ) : ''}
                    
                    <MenuItem onClick={logoutClickHandler}>Déconnexion</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>Se connecter</Link>
                </NextLink>
              )}

              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        <Image src={cartIcon} alt="Icone de panier" width='25px' height='25px'/>
                      </Badge>
                    ) : (
                      <Image src={cartIcon} alt="Icone de panier" width='25px' height='25px'/>
                    )}
                  </Typography>
                </Link>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar> 
        <Box sx={{justifyContent: 'space-around', alignItems: 'center', display: { xs: 'flex' }}}>
          <Box sx={classes.translationSelector} className="translation-selector">
                    <div id="google_translate_element"></div>
                    <Script type="text/javascript" id="google-script-function">
                      {`function googleTranslateElementInit() {
                          new google.translate.TranslateElement(
                              {pageLanguage: 'fr',
                              includedLanguages : 'en,fr'},
                              'google_translate_element'
                          );
                      }`}
                    </Script>
  
                    <Script type="text/javascript"
                            id="google-script"
                            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
                    </Script>

                    

                  

            </Box>
          <Box sx={{display: { xs: 'flex', sm: 'none' }}}>
                <form onSubmit={submitHandler}>
                  <Box sx={classes.searchForm}>
                    <InputBase
                      name="query"
                      sx={classes.searchInput}
                      placeholder="Rechercher un produit"
                      onChange={queryChangeHandler}
                    />
                    <IconButton
                      type="submit"
                      sx={classes.searchButton}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </form>
          </Box> 

          <Box sx={{display: { xs: 'flex', sm: 'none' }}}>
            
              <MenuIcon color='secondary' onClick={handleMobileNav} className='cursor-pointer' />
            
          </Box>
           
        </Box>
        <Box>
          {mobileNav? (
          
          <ul className="list-style-none mobile-nav">
              <li className='display-flex1' onClick={handleMobileRoues}>{categories[0]} <Image src ={dpd} width="12px" className='margin-left'/></li>
                      {mobileRoues? (
                        <> 
                            <ul className='list-style-none mobile-subcategory-nav'>
                              <NextLink href='search?category=Roues'>
                                <li>Tout</li>  
                              </NextLink>
                              
                            {roues.map((roue) => ( 
                              <NextLink href={`search?category=Roues&rouesSubCategory=${roue}`}>
                                <li>{roue}</li>  
                              </NextLink>   
                              
                            ))}    
                            </ul>  
                        </>
                          
                      ) : ''}
                      
                      
              <li className='display-flex2' onClick={handleMobilePieces}>{categories[1]} <Image src ={dpd} width="12px" className='margin-left'/></li>
                        {mobilePieces? (
                        <> 
                            <ul className='list-style-none mobile-subcategory-nav'>
                              <NextLink href={`search?category=${categories[1]}`}>
                                <li>Tout</li>  
                              </NextLink>
                              
                            {pieces.map((piece) => ( 
                              <NextLink href={`search?category=${categories[1]}&piecesSubCategory=${piece}`}>
                                <li>{piece}</li>
                              </NextLink>    
                            ))}    
                            </ul>  
                        </>
                          
                      ) : ''}

              <NextLink href={`search?category=${categories[2]}`}>
                <li>{categories[2]} </li>
              </NextLink>
              <NextLink href={`search?category=${categories[3]}`}>
                <li>{categories[3]}</li>
              </NextLink>
          </ul>

          ) : ''}
          
        </Box>
        
        <Box sx={classes.categories}>
          
                  
                    <Box>
                      
                          <Typography 
                            primary={categories[0]} 
                            sx={{padding: '15px 25px', cursor: 'pointer', display: 'flex', alignItems: 'center'}}
                            id="basic-button-roues"
                            aria-controls={openRoues ? 'basic-menu-roues' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openRoues ? 'true' : undefined}
                            onClick={handleRouesClick}
                          >

                              {categories[0]}
                              <Image src={dropdown} width='25px' />

                          </Typography> 
                          <Menu
                            id="basic-menu-roues"
                            anchorEl={anchorElRoues}
                            open={openRoues}
                            onClose={handleRouesClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button-roues',
                            }}
                          >
                            <NextLink href={`search?category=${categories[0]}`}><MenuItem onClick={handlePiecesClose}>Voir tout</MenuItem></NextLink>
                            {roues.map((roue) => (
                              <NextLink href={`search?category=Roues&rouesSubCategory=${roue}`}>
                                <MenuItem onClick={handleRouesClose}>{roue}</MenuItem>
                              </NextLink>
                            ))}
                            
                          </Menu>  
                      
                      
                    </Box>
                    
                  

                  <Box>
                      
                          <Typography 
                            primary={categories[1]} 
                            sx={{padding: '', cursor: 'pointer', display: 'flex', alignItems: 'center'}}
                            id="basic-button-pieces"
                            aria-controls={openPieces ? 'basic-menu-pieces' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openPieces ? 'true' : undefined}
                            onClick={handlePiecesClick}
                          >

                              {categories[1]}
                              <Image src={dropdown} width='25px' />

                          </Typography> 
                          <Menu
                            id="basic-menu-pieces"
                            anchorEl={anchorElPieces}
                            open={openPieces}
                            onClose={handlePiecesClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button-pieces',
                            }}
                          >
                            <NextLink href={`search?category=${categories[1]}`}><MenuItem onClick={handlePiecesClose}>Voir tout</MenuItem></NextLink>
                            {pieces.map((piece) => (
                              <NextLink href={`search?category=${categories[1]}&piecesSubCategory=${piece}`}>
                                  <MenuItem onClick={handlePiecesClose}>{piece}</MenuItem> 
                              </NextLink>
                            ))}
                            
                          </Menu>  
                      
                      
                    </Box>

                  <NextLink
                    key={categories[2]}
                    href={`/search?category=${categories[2]}`}
                    passHref
                  >
                    <Typography primary={categories[2]} sx={{padding: '15px 25px', cursor: 'pointer'}}>{categories[2]}</Typography>
                  </NextLink>

                  <NextLink
                    key={categories[3]}
                    href={`/search?category=${categories[3]}`}
                    passHref
                  >
                    <Typography primary={categories[3]} sx={{padding: '15px 25px', cursor: 'pointer'}}>{categories[3]}</Typography>
                  </NextLink>
                
            
            
            
        </Box>
        <Container component="main" sx={classes.main}>
          <Box>
            {children}
          </Box>
        </Container>
        <Box component="footer" sx={classes.footer} className='footer'>
          <Box sx={{display: {sm: 'flex'}, justifyContent: 'space-around'}}>
            <Box sx={{marginLeft: '50px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: {xs: 'none', md: 'flex'}}}>
              <Image src={logo} alt="Logo e-scoot" width='220px' />
            </Box>

            <Box sx={{textAlign: 'left'}}>
                <Typography component='h3' variant="h3" sx={{marginTop: '35px'}}>Informations</Typography>
                
                {footer?.map((item) => (
                  <div key={item.slug}>
                    <Footer footer={item} />
                  </div>
                  
                ))}
            </Box>
                   

            <Box sx={{textAlign: 'left'}}>
                  <Typography component='h3' variant="h3" sx={{marginTop: '35px'}}>Catégories principales</Typography>
                   
                     {categories.map((category) => (
                     <ul className='list-style-none' key={category}> 
                     <NextLink href={`/search?category=${category}`}>
                      <li key={category} className='cursor-pointer'>{category}</li> 
                     </NextLink>
                      
                     </ul> 
                     ))}
                   
            </Box>

            

             
          </Box>
          
          <Typography sx={{marginTop: '50px'}}>Tout droits réservés. EScootch.</Typography>
        </Box>
      </ThemeProvider>

      
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "categories"]';
  const categoriesData = await client.fetch(query);

  const brandsQuery = '*[_type == "brand"]';
  const brandsData = await client.fetch(brandsQuery);

  return {
    props: { categoriesData, brandsData }
  }

}
