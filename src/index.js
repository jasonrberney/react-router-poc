import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App 
            location="Palen" 
            tableTitle="Cultural Reporting (Monthly)"
        />
    </Provider>, document.getElementById('root')
);

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.API_URL', process.env.API_URL);
console.log('process.APP_DIR', process.APP_DIR);