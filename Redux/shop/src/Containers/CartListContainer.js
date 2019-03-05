import CartList from '../Components/CartList'
import { connect } from 'react-redux'
import {changeQuantity} from '../Actions/index'
import {removeFromCart} from '../Actions/index'
import {buyAllStuff} from '../Actions/index'

const mapStateToProps = (state) => ({
    cart:state.cart,
})

const mapDispatchToProps =(dispatch,ownProps)=>({
    increaseQuantity:(id,quantity) => dispatch(changeQuantity(id,quantity+1)),
    decreaseQuantity:(id,quantity) => dispatch(changeQuantity(id,quantity-1)),
    removeFromList:(id) => dispatch(removeFromCart(id)),
    dispatch:()=> dispatch(buyAllStuff()),
})
export default connect(mapStateToProps,mapDispatchToProps)(CartList)
