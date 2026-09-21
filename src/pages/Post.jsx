import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import '../../assets/styles/post.css';

const Post = ({ type, posts }) => {
    const { slug } = useParams()
    const [ md, setMd ] = useState('')
    
    /* the post's slug must exist in posts.json and have markdown file in the path */
    const post = posts.find((entry) => entry.slug === slug)

    useEffect(() => {
        if (!post) return;

        setMd('')
        import(`../../assets/content/posts/${type}/${post.filename}`)
            .then( result => {
                fetch( result.default )
                    .then( res => res.text() )
                    .then( text => setMd(text))
            })
            .catch( error => console.log(error) )
    }, [type, post]);

    if (!post) {
        return <Navigate to={type === 'project' ? '/projects' : '/knowledge'} replace />
    }

    return (
        <div className='reactmd'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {md}
            </ReactMarkdown>
        </div>
    )
}


export default Post
