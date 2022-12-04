import React, { useState, useEffect } from 'react';
import client from '../../utils/client';
import Layout from '../../components/Layout';
import {PortableText as BasePortableText} from '@portabletext/react';
import {
  Typography,
  CircularProgress,
  Alert,
  Box
} from '@mui/material';



export default function Footer (props) {

  const { slug } = props;

  const [state, setState] = useState({
    footer: null,
    loading: true,
    error: '',
  });
  const { footer, loading, error } = state;

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const footer = await client.fetch(
          `
            *[_type == "footer" && slug.current == $slug][0]`,
          { slug }
        );
        
        setState({ ...state, footer, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    
    fetchData();
  }, []);


  return (
    <Layout title={footer?.title}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant='error'>{error}</Alert>
      ) : (
        <Box>
          <Typography component="h2" variant="h2" sx={{marginTop: "50px"}}>{footer.title}</Typography>
          <Typography>
                <BasePortableText value={footer.content} />   
          </Typography>
        </Box>
      )
      }
 
        
    </Layout>
  )
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
