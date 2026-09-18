import React from "react";
import { Divider, List } from 'antd';

import { Title } from "../components/Text.jsx";
import BlogCard from "../components/BlogCard.jsx";

const Blog = ({ title, posts }) => {
    return (
        <div className="page-stack">
            <section className="page-stack__section">
                <div className="page-stack__header">
                    <Title>{title}</Title>
                    <Divider />
                </div>
                <List
                    className="page-stack__list"
                    grid={{
                        gutter: [24, 24],
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3
                    }}
                    dataSource={posts}
                    renderItem={(item) => (
                        <List.Item style={{ height: '100%' }}>
                            <BlogCard 
                                { ...item }
                            />
                        </List.Item>
                    )}
                />
            </section>
        </div>
    )
}

export default Blog;