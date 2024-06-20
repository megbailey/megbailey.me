import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import '../../assets/styles/post.css';

let params = new URLSearchParams(document.location.search);
let id = parseInt( params.get("id") );

const Post = ({ type, posts }) => {
    const [ md, setMd ] = useState('')
    
    /* the post's id must exist in posts.json and have markdown file in the path*/
    const post = posts[id]

    useEffect(() => {
        if (!post) return;

        import(`../../assets/content/posts/${type}/${post.filename}`)
            .then( result => {
                fetch( result.default )
                    .then( res => res.text() )
                    .then( text => setMd(text))
            })
            .catch( error => console.log(error) )
    }, [type, post]);
    
    

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