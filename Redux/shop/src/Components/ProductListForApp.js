import React,{Component} from 'react'
import ProductForApp from './ProductForApp'
import PropTypes from 'prop-types'

class ProductListForApp extends Component{
    render(){
        return(
            <div className="container text-center" style={{marginTop:'5%'}}>
                {
                    this.props.products.map((product)=> 
                    <ProductForApp
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        addToCart={()=>this.props.addToCart(product.title,product.price)}
                    />)
                }
            </div>
        )
    }
}

ProductListForApp.propTypes={
    products:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    addToCart:PropTypes.func.isRequired,
}
export default ProductListForApp;