import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

import '../../assets/styles/post.css'
//const id = new URLSearchParams(window.location.href).search.get('id');
const postsConfig = require('../../assets/posts.json');
const id = 0
/* the posts id must exist in posts.json and have a valid asset path */
const post = postsConfig[id];

const Post = ( props ) => {
    const { type } = props
    const [ md, setMd ] = useState('')

    useEffect(() => {
        import(`../../assets/posts/${type}/${post.filename}.md`)
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