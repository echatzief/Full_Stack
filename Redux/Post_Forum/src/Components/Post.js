import React from 'react';
import PropTypes from 'prop-types';

const Post = ({title,text,markAsRead})=>(
    <div className="container text-center">
        <h1>{title}</h1>
        <p>{text}</p>
        <button type="button" className="btn btn-primary" onClick={markAsRead}>Mark as read</button>
    </div>
)

Post.propTypes={
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    markAsRead:PropTypes.func.isRequired,
}

export default Post;