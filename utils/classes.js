

const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    marginTop: 2,
    minHeight: '80vh',
    
  },
  
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  appbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
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
    color: '#ffffff',
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#f8c040',
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
    padding: '15px',
    color: "#fff",
  },
  productItemButton: {
    //backgroundColor: "#324D67",
    color: '#fff',
    backgroundColor: "#324D67"
  },
  productName: {
    color: "#324D67",
    fontSize: '18px',
    fontWeight: '800',
    overflowWrap: 'break-word',
    maxWidth: '200px'
  }
};

export default classes;
