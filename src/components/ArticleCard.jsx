import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { format, parse } from 'date-fns';

import useImage from "../utils/useImage.js";
import '../../assets/styles/cards.css'

const formatPublishDate = (publishDate) => {
    if (!publishDate) return null;

    try {
        return format(parse(publishDate, 'MM/dd/yy', new Date()), 'MMM d, yyyy');
    } catch {
        return publishDate;
    }
}

const ArticleCard = ({
    href,
    name,
    description,
    publish_date: publishDateRaw,
    image: { src } = {},
    eyebrow,
    cta,
    actions,
}) => {
    const theme = useSelector(state => state.theme.value)
    const asyncImage = useImage(src)
    const imageSrc = src?.includes('http') ? src : asyncImage.image
    const publishDate = formatPublishDate(publishDateRaw)

    return (
        <article className={`content-card content-card--${theme.mode}`}>
            <a href={href} className="content-card__link">
                <div className="content-card__media">
                    {imageSrc && (
                        <img src={imageSrc} alt="" />
                    )}
                </div>
                <div className="content-card__body">
                    <div className="content-card__meta">
                        <span className="content-card__eyebrow">{eyebrow}</span>
                        {publishDate && (
                            <time className="content-card__date" dateTime={publishDateRaw}>
                                {publishDate}
                            </time>
                        )}
                    </div>
                    <h3 className="content-card__title">{name}</h3>
                    <p className="content-card__excerpt">{description}</p>
                    <span className="content-card__cta">
                        {cta}
                        <span className="content-card__cta-arrow" aria-hidden="true">→</span>
                    </span>
                </div>
            </a>
            {actions}
        </article>
    )
}

ArticleCard.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    publish_date: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
    }),
    eyebrow: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    actions: PropTypes.node,
}

export default ArticleCard;
