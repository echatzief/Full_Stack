import React,{Component} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
const styleDiv={
    marginTop:'8%',
}
class AllPosts extends Component{
    render(){
        return(
            <div className="container text-center" style={styleDiv}>
                <h1>All Posts</h1>
                <ul>
                    {this.props.posts.map(post=> 
                        <Post key={post.id} title={post.title} 
                            text={post.message} markAsRead={()=> this.props.toggle(post.id)}
                        />)
                    }
                </ul>
            </div>
        );
    }
}

AllPosts.propTypes={
    posts:PropTypes.arrayOf(PropTypes.shape({
        title:PropTypes.string.isRequired,
        message:PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        hasBeenRead: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    toggle:PropTypes.func.isRequired,
}
export default AllPosts;