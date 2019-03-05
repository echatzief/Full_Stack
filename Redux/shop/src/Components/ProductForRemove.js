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
class ProductForRemove extends Component{
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
                    <div>Description: </div>
                    <p>{this.props.description}</p>
                </div>
                <div style={compStyle}>
                    <button type="button" className="btn btn-danger" onClick={this.props.removeProduct}>Remove Product</button>
                </div>
            </div>
        )
    }
}

ProductForRemove.propTypes={
    title:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    removeProduct:PropTypes.func.isRequired,
}

export default ProductForRemove;