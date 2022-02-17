import React, { memo, Suspense } from 'react';
import './App.less';
import 'animate.css';
import routes from "./router/index";
import store from './store';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';
import '@locales/config';
import { useTranslation } from 'react-i18next';

export default memo(function App() {

  const { t } = useTranslation(); 

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h1>{t("loading")}</h1>}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
})
