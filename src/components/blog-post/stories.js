import React from "react";
import BlogPost from "./BlogPost"

const props = {
    title: "Post Title",
    date: "1999-12-31",
    subText: "This is some subtext that usually is a hint/preview of the blog post. \
            Sub text is displayed when posts are truncated",
    fullText: "This is the full text of the blog post. It can render trusted html",
    img: [
         //3 sizes src and px
        {
            src: "",
            px: "",
        }
    ],
}

export const BlogPostDemo = () => {
    return <BlogPost {...props} />
};


