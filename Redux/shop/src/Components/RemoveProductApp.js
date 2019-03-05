import React,{Component} from 'react'
import Navbar from './Navbar'
import RemoveProductContainer from '../Containers/RemoveProductContainer';
class RemoveProductApp extends Component{
    
    render(){
        return(
            <div>
                <Navbar/>
                <RemoveProductContainer/>
            </div>
        );
    }
}

export default RemoveProductApp;