import React,{Component} from 'react';
import VisiblePost from './VisiblePost';
import PostForm from './PostForm';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <div className="container">
                <PostForm/>
                <VisiblePost/>
                <Footer/>
            </div>
        );
    }
}

export default App;
