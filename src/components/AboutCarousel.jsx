import React, { useCallback, useRef } from 'react';
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
    const carouselRef = useRef(null)
    const containerRef = useRef(null)

    const focusCarousel = useCallback(() => {
        containerRef.current?.focus({ preventScroll: true })
    }, [])

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            carouselRef.current?.prev()
        } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            carouselRef.current?.next()
        }
    }, [])

    if (!photos?.length) {
        return null
    }

    return (
        <div
            ref={containerRef}
            className={`about-carousel about-carousel--${theme.mode}`}
            tabIndex={0}
            role="region"
            aria-label="Photo carousel. Use left and right arrow keys to navigate."
            onClick={focusCarousel}
            onKeyDown={handleKeyDown}
        >
            <Carousel ref={carouselRef} arrows dots>
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
