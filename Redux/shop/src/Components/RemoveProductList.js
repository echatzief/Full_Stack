import React,{Component} from 'react'
import ProductForRemove from './ProductForRemove';
import PropTypes from 'prop-types'

class RemoveProductList extends Component{
    render(){
        return(
            <div>
                <div className="container text-center" style={{marginTop:'5%'}}>
                    {
                        this.props.products.map((product)=> 
                        <ProductForRemove
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            removeProduct={ () =>this.props.removeProduct(product.id)}
                        />)
                    }
                </div>
            </div>
        );
    }
}

RemoveProductList.propTypes={
    products:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    removeProduct:PropTypes.func.isRequired,
}

export default RemoveProductList;