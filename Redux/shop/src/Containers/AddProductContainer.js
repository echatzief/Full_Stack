import AddProduct from '../Components/AddProduct';
import { connect } from 'react-redux'
import {addProduct} from '../Actions/index'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps =(dispatch)=>({
    submit: (title,price,description) => dispatch(addProduct(title,price,description))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct)