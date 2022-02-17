import React, { memo, Suspense } from 'react';
import './App.less';
import routes from "./router/index";
import store from './store';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';
import '@locales/config';
import Loading from '@pages/others/loading';
import 'animate.css';

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={Loading()}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
})
