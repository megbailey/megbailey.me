import React from "react";
import { useSelector } from 'react-redux';
import { Button, Avatar } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';

import ArticleCard from "./ArticleCard.jsx";

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'

const ProjectCard = ({
    slug,
    name,
    description,
    publish_date,
    image,
    githubURL,
    liveDemoURL,
}) => {
    const theme = useSelector(state => state.theme.value)

    const actions = (githubURL || liveDemoURL) ? (
        <div className="content-card__actions">
            {githubURL && (
                <Button
                    size="middle"
                    type="link"
                    shape="circle"
                    href={githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on GitHub`}
                    onClick={(event) => event.stopPropagation()}
                    icon={
                        <Avatar
                            size={28}
                            src={theme.mode === "light" ? OctocatLight : OctocatDark}
                        />
                    }
                />
            )}
            {liveDemoURL && (
                <Button
                    size="middle"
                    type="link"
                    shape="circle"
                    href={liveDemoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} live demo`}
                    onClick={(event) => event.stopPropagation()}
                    icon={<DesktopOutlined style={{ fontSize: '18px' }} />}
                />
            )}
        </div>
    ) : null

    return (
        <ArticleCard
            href={`/projects/${slug}`}
            name={name}
            description={description}
            publish_date={publish_date}
            image={image}
            eyebrow="Project"
            cta="View project"
            actions={actions}
        />
    )
}

export default ProjectCard;
