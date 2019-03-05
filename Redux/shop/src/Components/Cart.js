import React,{Component} from 'react'
import Navbar from './Navbar'
import CartListContainer from '../Containers/CartListContainer'
class Cart extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <CartListContainer/>
            </div>
        );
    }
}

export default Cart;