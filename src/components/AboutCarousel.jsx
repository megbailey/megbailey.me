import React from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

import useImage from '../utils/useImage.js';
import '../../assets/styles/about-carousel.css';

const CarouselSlide = ({ src, caption }) => {
    const { image } = useImage(src)

    return (
        <div className="about-carousel__slide">
            {image && (
                <img
                    className="about-carousel__image"
                    src={image}
                    alt={caption}
                />
            )}
            <p className="about-carousel__caption">{caption}</p>
        </div>
    )
}

const AboutCarousel = ({ photos }) => {
    const theme = useSelector(state => state.theme.value)

    if (!photos?.length) {
        return null
    }

    return (
        <div className={`about-carousel about-carousel--${theme.mode}`}>
            <Carousel arrows dots>
                {photos.map(({ src, caption }) => (
                    <CarouselSlide
                        key={`${src}-${caption}`}
                        src={src}
                        caption={caption}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default AboutCarousel;
