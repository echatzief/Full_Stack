import ProductListForApp from '../Components/ProductListForApp'
import {addToCart} from '../Actions/index'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    products:state.products
})

const mapDispatchToProps =(dispatch)=>({
    addToCart: (title,price) => dispatch(addToCart(title,price))
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductListForApp)