import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
