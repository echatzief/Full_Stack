import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addPost} from '../Actions/index';

const styleDiv={
    marginTop:'4%',
    width:'70%',
}
const noResize={
    resize: 'none',
}
class PostForm extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            message:'',
        }
        this.submitPost=this.submitPost.bind(this);
    }

    titleChange =(e)=>{
        this.setState({
            title:e.target.value,
        })
    }
    messageChange =(e)=>{
        this.setState({
            message:e.target.value,
        })
    }
    submitPost(){
        if(this.state.title!=='' && this.state.message!==''){
            console.log(this.state);
            this.props.dispatch(addPost(this.state.title,this.state.message));
            this.setState({
                title:'',
                message:'',
            })
        }
    }
    render(){
        return(
            <div className="container" style={{marginTop:'8%'}}>
                <div className="text-center"><h1>Post</h1></div>
                <div className="container text-center" style={styleDiv}>
                    <input type="text" className="form-control" onChange={this.titleChange} value={this.state.title} placeholder="Post title"/>
                </div>
                <div className="container text-center" style={styleDiv}>
                    <textarea className="form-control" style={noResize} onChange={this.messageChange} value={this.state.message} placeholder="Post Message" rows="3"></textarea>
                </div>
                <div className="container text-center" style={styleDiv}>
                    <button type="button" className="btn btn-primary" onClick={this.submitPost}>Post</button>
                </div>
            </div>
        );
    }
}

export default connect()(PostForm);