import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import data from './data/data';

import {BrowserRouter,Route, Link} from 'react-router-dom';


// ReactDOM.render(<App data={data}/>, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <App data={data}/>
    </BrowserRouter>
    ),document.getElementById('root'))



registerServiceWorker();
