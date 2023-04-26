import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//import { initStore } from './redux/initStore';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const store = initStore();

root.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
        {/*</Provider>*/}
    </React.StrictMode>
);
