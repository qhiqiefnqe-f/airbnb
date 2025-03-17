import React from 'react';
import { createRoot } from 'react-dom/client'; // 添加这行导入
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import store from './store';
import theme from './assets/theme';  // 导入主题
import '@assets/css/index.less';
import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>  {/* 提供主题 */}
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
