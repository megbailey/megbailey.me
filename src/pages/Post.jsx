import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import '../assets/styles/post.css'

const postsConfig = require('../assets/posts.json');
let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get("id"));
/* the posts id must exist in posts.json and have a valid asset path */
const post = postsConfig[id];

const Post = ( props ) => {
    const { type } = props
    const [ md, setMd ] = useState('')

    useEffect(() => {
        if (!post) return;

        import(`../assets/posts/${type}/${post.filename}`)
            .then( result => {
                fetch( result.default )
                    .then( res => res.text() )
                    .then( text => setMd(text))
            })
            .catch( error => console.log(error) )
    }, [type]);
    
    

    return (
        <ReactMarkdown 
            className='reactmd'
            remarkPlugins={[remarkGfm]}
        >{md}</ReactMarkdown>
    )

}


Post.propTypes = {
    type: PropTypes.oneOf([ 'blog', 'project' ]).isRequired,
}

export default Post