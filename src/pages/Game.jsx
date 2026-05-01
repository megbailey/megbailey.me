import React, { useState, useEffect, useRef } from "react";
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import PokePlatformer from 'poke-platformer';

import '../../assets/styles/home.css';

const Game = () => {
    const theme = useSelector(state => state.theme.value)
    const parentRef = useRef(null)
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)
    const [ topOffset, setTopOffset ] = useState(0)

    const { color } = theme.style

    useEffect(() => {
        const updateDimensions = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        } 
        window.addEventListener('resize', updateDimensions);

        const resizeObserver = new ResizeObserver((event) => {
            setTopOffset(event[0].contentRect.top)
        });

        resizeObserver.observe(parentRef.current);
    }, []);

    return (
        <div ref={parentRef} className={`game-showcase--${theme.name}`}>
            <Row justify="center">
                <PokePlatformer 
                    key={ topOffset + windowWidth + windowHeight}
                    width={windowWidth* .90 } 
                    height={windowHeight * .5 }
                    //debug={true}
                />
            </Row>
        </div>
    )
}
export default Game;