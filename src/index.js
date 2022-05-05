import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //     <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    //     </React.StrictMode>
);
