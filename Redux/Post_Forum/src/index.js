import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Reducers/rootReducer';
import App from './Components/App';


const store = createStore(rootReducer);
const render = ()=>ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

render();
store.subscribe(render);

