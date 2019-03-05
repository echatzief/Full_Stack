import React,{Component} from 'react'
import ProductAtCart from './ProductAtCart';
import PropTypes from 'prop-types'

class CartList extends Component{

    constructor(props){
        super(props)
        this.state={
            sum:0,
        }
    }
    buyAll = ()=>{
        var totalSum = 0
        for(let i=0;i<this.props.cart.length;i++){
            totalSum = totalSum + Number(this.props.cart[i].price) * this.props.cart[i].quantity
        }

        this.setState({
            sum:totalSum,
        })
    }

    deleteCart = ()=>{
        this.props.dispatch();
        this.setState({
            sum:0,
        })
    }
    render(){
        return(
            <div>
                <div className="container text-center" style={{marginTop:'5%',height:'400px',overflowX: 'scroll'}}>
                    {
                        this.props.cart.map((item)=> 
                            <ProductAtCart
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                increaseQuantity={() =>this.props.increaseQuantity(item.id,item.quantity)}
                                decreaseQuantity={() =>this.props.decreaseQuantity(item.id,item.quantity)}
                                removeFromList={()=>this.props.removeFromList(item.id)}
                            />
                        )
                    }
                </div>
                <div className="container text-center" style={{marginTop:'5%'}}>
                    <button type="button" onClick={this.buyAll} className="btn btn-primary" data-toggle="modal" data-target="#buyAllModal">
                        Buy All
                    </button>
                </div>
                <div className="modal fade" id="buyAllModal" tabIndex="-1" role="dialog" aria-labelledby="buyAllModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="buyAllModal">Final Summary</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Sum: {this.state.sum}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.deleteCart} data-dismiss="modal">Finalize</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CartList.propTypes={
    cart:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    increaseQuantity:PropTypes.func.isRequired,
    decreaseQuantity:PropTypes.func.isRequired,
    removeFromList:PropTypes.func.isRequired,
    dispatch:PropTypes.func.isRequired,
}

export default CartList;