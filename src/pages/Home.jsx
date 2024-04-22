import React, { useEffect, useRef, useState } from "react";
//import PropTypes from "prop-types";
import { 
    Row, Button, Avatar, Image, Space
} from 'antd';

import '../assets/styles/home.css';
import { images } from '../utils/assets.js'
import { themeStyle } from "../utils/style.js";
import PokePlatformer from 'poke-platformer';

const Home = ({ links, theme }) => {
    const { color } = themeStyle(theme)
    const [ windowSize, setWindowSize ] = useState({ width: window.innerWidth, height: window.innerHeight })
    const gameRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
      },[])

    function updateDimensions() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    } 

    return (
        <div className={`home`}>
       <PokePlatformer 
            //ref={gameRef}
            width={windowSize.width * .90 } 
            height={windowSize.height * .333 }
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