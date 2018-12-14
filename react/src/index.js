import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const element = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(element, document.getElementById('root'));
