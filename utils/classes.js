import appareil from '../assets/appareil-photo.jpg'

const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
    boxShadow: 0,
    borderBottom: '1px solid #CDCDCD',
    borderRadius: 0
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    paddingTop: 2,
    minHeight: '80vh',
    
  },
  
  footer: {
    marginTop: 1,
    textAlign: 'left',
    backgroundColor: "#D9D9D9",
    padding: '25px',
    width: '100vw',
  },
  appbar: {
    backgroundColor: '#fff',
    '& a': {
      color: '#000',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navbarButton: {
    color: '#000',
    textTransform: 'initial',
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  // search

  searchForm: {
    border: '1px solid #ffffff',
    borderRadius: 1,
    
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
    backgroundColor: '#F7F7F7'
  },
  searchButton: {
    backgroundColor: '#324D67',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  cart: {
    backgroundColor: '#324D67',
    color: "#324D67",
  },
  
  categories: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#324D67",
    color: "#fff",
    overflowX: 'auto',
    display: { xs: 'none', sm: 'flex' }
  },
  productItemButton: {
    //backgroundColor: "#324D67",
    color: '#fff',
    backgroundColor: "#324D67",
    fontSize: {xs: '9px', sm: '11px'},
  },
  productName: {
    color: "#324D67",
    fontSize: '16px',
    fontWeight: '500',
    overflowWrap: 'break-word',
    maxWidth: '200px'
  },
  subCategoryCard: {
    background: "#f5f5f5",
    margin: '15px 5px',
    padding: '12px',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '14px'
  },

  subCategoriesAccueil: {
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${appareil.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
    height: '200px',
    width: '225px',
    borderRadius: '12px',

    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: '1px',
    cursor: 'pointer',
    margin: '15px'
  },
  translationSelector: {
    
    position: {sm: 'absolute'},
    top: {sm: '25px'},
    right: {sm: '28%'}
  }
};

export default classes;
