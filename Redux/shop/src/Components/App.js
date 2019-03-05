import React,{Component} from 'react'
import Navbar from './Navbar'
import ProductListForAppContainer from '../Containers/ProductListForAppContainer';

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <ProductListForAppContainer/>
            </div>
        );
    }
}

export default App;