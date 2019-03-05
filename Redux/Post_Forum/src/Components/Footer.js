import React,{Component} from 'react';
import {visibilityFilters} from '../Actions/index';
import { connect } from 'react-redux';
import {setVisibility} from '../Actions/index';

const styleDiv={
    marginTop:'8%',
    marginBottom:'5%',
}
const butStyle={
    marginLeft:'2%',
}
class Footer extends Component{
    render(){
        return(
            <div className="container text-center" style={styleDiv}>
                <button type="button" className="btn btn-light" onClick={this.props.chooseAll}style={butStyle}>All</button>
                <button type="button" className="btn btn-dark" onClick={this.props.chooseNew}style={butStyle}>New to read</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
})
  
const mapDispatchToProps = (dispatch)=>({
    chooseAll: ()=> dispatch(setVisibility(visibilityFilters.SHOW_ALL)),
    chooseNew: ()=> dispatch(setVisibility(visibilityFilters.NOT_READ))
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer);