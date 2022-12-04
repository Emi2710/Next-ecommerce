import Image from 'next/image';
import logo from '../assets/logo.svg';

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
  ListItem,
  ListItemText,
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

export default function Layout({ title, description, children }) {
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
                  <Typography sx={{margin: '25px', display: { xs: 'none', sm: 'block' }}}>FR</Typography>
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
                        Panier
                      </Badge>
                    ) : (
                      'Panier'
                    )}
                  </Typography>
                </Link>
              </NextLink>
            </Box>
          </Toolbar>
        </AppBar> 
        <Box sx={{justifyContent: 'space-around', alignItems: 'center', display: { xs: 'flex', sm: 'none' }}}>
          <Box>
            <Typography>FR</Typography>
          </Box>
          <Box>
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

          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="secondary"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
              {categories.map((category) => (
                <MenuItem key={category} onClick={handleCloseNavMenu}>
                  <NextLink 
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <Typography textAlign="center">{category}</Typography>  
                  </NextLink>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box> 
        </Box>
        
        <Box sx={classes.categories} className="menu-categories">
          
              {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                    >
                      <ListItemText primary={category} sx={{display: "flex", justifyContent: "space-around",}}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
                
            
            
            
        </Box>
        <Container component="main" sx={classes.main}>
          <Box>
            {children}
          </Box>
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
            <Box sx={{marginLeft: '50px', flexDirection: 'column', alignItems: 'center', display: {xs: 'none', md: 'flex'}}}>
              <Image src={logo} alt="Logo e-scoot" width='220px' />
              <Typography sx={classes.productName}>E-Scoot</Typography>
            </Box>

            <Box sx={{textAlign: 'left'}}>
                <Typography component='h2' variant="h2">Informations</Typography>
                
                {footer?.map((item) => (
                  <div key={item.slug}>
                    <Footer footer={item} />
                  </div>
                  
                ))}
            </Box>
                   

            <Box sx={{textAlign: 'left'}}>
                  <Typography component='h2' variant="h2">Catégories principales</Typography>
                   
                     {categories.map((category) => (
                     <ul className='list-style-none'> 
                     <NextLink href={`/search?category=${category}`}>
                      <li key={category}>{category}</li> 
                     </NextLink>
                      
                     </ul> 
                     ))}
                   
            </Box>

            

             
          </Box>
          
          <Typography sx={{marginTop: '50px'}}>Tout droits réservés. E-scoot.</Typography>
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
