import React from "react";

import ArticleCard from "./ArticleCard.jsx";

const BlogCard = ({ slug, name, description, publish_date, image }) => (
    <ArticleCard
        href={`/knowledge/${slug}`}
        name={name}
        description={description}
        publish_date={publish_date}
        image={image}
        eyebrow="Article"
        cta="Read article"
    />
)

export default BlogCard;
