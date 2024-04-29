import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { Row, Button, Avatar,  Space } from 'antd';

import '../assets/styles/home.css';
import { images } from '../utils/assets.js'
import { themeStyle } from "../utils/style.js";
import PokePlatformer from 'poke-platformer';

const Home = ({ links, theme, parentRef }) => {
    const { color } = themeStyle(theme)
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)
    const [ topOffset, setTopOffset ] = useState(0)

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
        <div className={`home`}>
        <PokePlatformer 
            key={ topOffset + windowWidth + windowHeight}
            offsetY={64 + topOffset }
            offsetX={windowWidth * 0.05}
            width={windowWidth* .90 } 
            height={windowHeight * .333 }
            //debug={true}
        />
        <Row justify={"space-evenly"}>
            <Space size={25} wrap>
            { links.map(( item ) => {
                const { text, img: { src, size }, url } = item
                return (
                    <Button
                        key={url}
                        style={{ color: color }}
                        size={'large'}
                        type={'link'}
                        shape={'circle'}
                        href={url}
                        icon={<Avatar size={size} src={ images(`./${src}`) } />}
                        block
                    >{text}</Button>
                )
            }) }
            </Space>
        </Row> 
        </div>
    )
}
export default Home;