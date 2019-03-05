import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import {BrowserRouter as Router,Route} from 'react-router-dom'

//Components
import App from './Components/App';
import AddProductContainer from './Containers/AddProductContainer';
import RemoveProductApp from './Components/RemoveProductApp';
import Cart from './Components/Cart';


//Create the store
export const store = createStore(rootReducer)

const render = ()=>ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/addProduct" component={AddProductContainer}/>
                <Route path="/removeProduct" component={RemoveProductApp}/>
                <Route path="/cart" component={Cart}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)

render()

//Subscribe the render func to store
store.subscribe(render)
