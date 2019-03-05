import React,{Component} from 'react'
import PropTypes from 'prop-types'

const compStyle={
    marginTop:'2%',
    marginBottom:'2%',
}
const generalStyle={
    backgroundColor:'#343A40',
    color:'#FFF',
    marginTop:'2%',
    paddingTop:'2%',
    paddingBottom:'2%',
}
class ProductAtCart extends Component{
    render(){
        return(
            <div className="container text-center" style={generalStyle}>
                <div style={compStyle}>
                    <div>Title: </div>
                    <h3>{this.props.title}</h3>
                </div>
                <div style={compStyle}>
                    <div>Price: </div>
                    <span>{this.props.price}</span>
                </div>
                <div style={compStyle}>
                    <div>Quantity : </div>
                    <span>{this.props.quantity}</span>
                    <button type="button" className="btn btn-success" onClick={this.props.increaseQuantity}>+</button>
                    <button type="button" className="btn btn-danger" onClick={this.props.decreaseQuantity}>-</button>
                </div>
                <div style={compStyle}>
                    <button type="button" className="btn btn-warning" onClick={this.props.removeFromList}>Remove</button>
                </div>  
            </div>
        )
    }
}

ProductAtCart.propTypes={
    title:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    quantity:PropTypes.number.isRequired,
    increaseQuantity:PropTypes.func.isRequired,
    decreaseQuantity:PropTypes.func.isRequired,
    removeFromList:PropTypes.func.isRequired,
}

export default ProductAtCart;