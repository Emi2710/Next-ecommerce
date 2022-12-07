import '../styles/global.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <StoreProvider>
            <PayPalScriptProvider deferLoading={true} options={{
          "AW3GWovzMJJ9LXllSZwHE9cvOW-biwRZc-MckTH6XflCF22U3IZF1gDUHGONXsml2aXDVSSYx_ViEsRI": "",
        }}>
              <Component {...pageProps} />
            </PayPalScriptProvider>  
          
        </StoreProvider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

export default MyApp;
