import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/Photos.js';
import PhotoRating from './containers/PhotoRating/PhotoRating.jsx';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <PhotoRating />
    </Provider>,
    document.getElementById('root'));
