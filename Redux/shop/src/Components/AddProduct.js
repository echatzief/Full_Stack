import React,{Component} from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'

const compStyle={
    marginTop:'2%',
}

class AddProduct extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            price:0,
            desc:'',
        }

    }   
    changeTitle =(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    changePrice =(e)=>{
        this.setState({
            price:e.target.value
        })
    }
    changeDesc =(e)=>{
        this.setState({
            desc:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container text-center" style={{width:'50%',marginTop:'3%'}}>
                
                    <div style={compStyle}>
                        <h1>Add a Product</h1>
                    </div>
                    <div style={compStyle}>
                        <input type="text" className="form-control" 
                             placeholder="Title..." value={this.state.title} onChange={this.changeTitle}
                        />
                    </div>
                    <div style={compStyle}>
                        <input type="text"  className="form-control" 
                            placeholder="Price...." value={this.state.price} onChange={this.changePrice}
                        />
                    </div>
                    <div style={compStyle}>
                        <textarea className="form-control" rows="3" 
                            placeholder="Description...." style={{resize:'none'}}
                            value={this.state.desc} onChange={this.changeDesc}
                        >
                        </textarea>
                    </div>
                    <div style={compStyle} >
                        <button type="submit" className="btn btn-dark" 
                            onClick={()=>{
                                
                                //Add product
                                this.props.submit(this.state.title,this.state.price,this.state.desc)

                                //Reset the state
                                this.setState({
                                    title:'',
                                    price:0,
                                    desc:'',
                                })
                            }}
                        >
                        Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

AddProduct.propTypes={
    submit:PropTypes.func.isRequired,
}
export default AddProduct;