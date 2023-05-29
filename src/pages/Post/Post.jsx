import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

console.log(window.location.href)
//const id = new URLSearchParams(window.location.href).search.get('id');
const postsConfig = require('../../assets/posts.json');
const id = 0
const Post = ( props ) => {
    const { type } = props

    let assetPath
    switch ( type ) {
        case 'project': 
            assetPath = postsConfig['_projectPostsPath']
            break;
        case 'blog': 
            assetPath = postsConfig['_blogPostsPath']
            break;
    }

   

    /* the posts id must exist in posts.json and have a valid asset path */
    if ( !postsConfig[id] )
        return null
    const filename = postsConfig[id]
    const mdFile = React.lazy(() => import(`${assetPath}/${filename}`));

    return (
        <ReactMarkdown>{mdFile}</ReactMarkdown>
    )
    
}


Post.propTypes = {
    type: PropTypes.oneOf([ 'blog', 'project' ]).isRequired,
    filename: PropTypes.string.isRequired
}

export default Post