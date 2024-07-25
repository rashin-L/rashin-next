"use client"
import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/base.css";
import "@/styles/fonts.css";
// import { ThemeProvider } from "@mui/material";
// import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { StyledRoot } from './StyledRoot';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
import { Provider } from "react-redux";
// import theme from "../ui/Theme/theme";
import { store, persistor } from "../redux/store";
import ContactUsModal from "@/ui/components/contactUsModal/ContactUsModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../../i18nextConf"
import { PersistGate } from "redux-persist/integration/react";
import React, { createContext, useState, useContext } from 'react';
import { GoftinoProvider } from "@/utils/GoftinoContext";
import "../../src/styles/base.css"
import ReduxProvider from "@/store/redux-provider";
// import LoadingScreen from "@/ui/components/LoadingScreen";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const defaultContextValue = { state: { value: '1' }, setState: () => { } }; // Default context value

const StateContext = createContext(defaultContextValue);




export default function RootLayout({ children }) {
  // const [loading, setLoading] = React.useState(false);

  const [state, setState] = useState({ value: '1' });
  const cacheRtl = createCache({
    key: "mui-style-rtl",
    stylisPlugins: [rtlPlugin],
  });
  // useEffect(()=>{
  //   setLoading(true);
  // },[])

  return (
    <html lang="fa" dir="rtl">

      <body className="scrollbar-color" >
        <AppRouterCacheProvider
          options={{ key: 'css' }}>
          {/* <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}> */}
              {/* <Header type="main" /> */}
          <ReduxProvider>
            <PersistGate loading={null} persistor={persistor}>
              <ToastContainer rtl />
              <StateContext.Provider value={{ state, setState }}>
                <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
                  <StyledRoot>
                    <CacheProvider value={cacheRtl}>
                      {/* <Suspense fallback={<LoadingScreen show={loading} />}> */}
                      <GoftinoProvider>
                        {children}
                      </GoftinoProvider>
                      {/* </Suspense> */}
                    </CacheProvider >
                  </StyledRoot>
                </AppRouterCacheProvider>
              </StateContext.Provider>
              <ContactUsModal />
              </PersistGate>
          </ReduxProvider>
            {/* </PersistGate>
          </Provider> */}

        </AppRouterCacheProvider>

      </body>
    </html >
  );
}
export const useStateContext = () => useContext(StateContext);
