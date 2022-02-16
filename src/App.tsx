import React, { memo } from 'react';
import './App.less';
import routes from "./router/index";
import store from './store';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';
import '@locales/config';

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
})
