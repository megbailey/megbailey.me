import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import '../../assets/styles/post.css';

const Post = ({ type, posts }) => {
    const [ md, setMd ] = useState('')
    const params = new URLSearchParams(document.location.search);
    const id = parseInt(params.get("id"), 10);
    
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
        <div className='reactmd'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {md}
            </ReactMarkdown>
        </div>
    )
}


Post.propTypes = {
    type: PropTypes.oneOf([ 'blog', 'project' ]).isRequired,
}

export default Post