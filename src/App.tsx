import React, { memo } from 'react';
import './App.less';
import routes from "./router/index";
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";

export default memo(function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
})
