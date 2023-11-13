import React from "react";
//import PropTypes from "prop-types";
import { 
    Row, Button, Avatar, Image, Space
} from 'antd';

import '../assets/styles/home.css';
import { images } from '../utils/assets.js'
import { themeStyle } from "../utils/style.js";

const Home = ({ links, theme }) => {
    const { color } = themeStyle(theme)
    
    return (
        <div className={`home`}>
        <Image
            preview={false}
            src="http://placehold.it/3000x1000"
            width={'100%'}
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