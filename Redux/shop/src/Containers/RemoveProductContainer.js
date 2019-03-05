import RemoveProductList from '../Components/RemoveProductList';
import { connect } from 'react-redux'
import {removeProduct} from '../Actions/index'

const mapStateToProps = (state) => ({
    products:state.products,
})

const mapDispatchToProps =(dispatch)=>({
    removeProduct: (id) => dispatch(removeProduct(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(RemoveProductList)