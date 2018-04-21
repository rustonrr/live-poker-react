import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import Player from './Components/Player/Player';
import Master from './Components/Master/Master';
import { Provider } from 'react-redux';
import store from './store.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Switch>
                    <Route path='/' exact component={LoginPage} />
                    <Route path='/player' component={Player} />
                    <Route path='/master' component={Master} />
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
