

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
    textAlign: 'center',
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
    backgroundColor: '#F7F7F7',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
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
    justifyContent: "space-around",
    backgroundColor: "#324D67",
    color: "#fff",
    overflowX: 'auto',
  },
  productItemButton: {
    //backgroundColor: "#324D67",
    color: '#fff',
    backgroundColor: "#324D67"
  },
  productName: {
    color: "#324D67",
    fontSize: '18px',
    fontWeight: '500',
    overflowWrap: 'break-word',
    maxWidth: '200px'
  },
  subCategoryCard: {
    background: "#f5f5f5",
    margin: '15px 5px',
    padding: '12px',
    cursor: 'pointer',
    borderRadius: '8px'
  }
};

export default classes;
