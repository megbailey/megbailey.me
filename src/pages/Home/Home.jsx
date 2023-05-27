import React from "react";
//import PropTypes from "prop-types";
import { 
    Col, Row, Button, Avatar, Image
} from 'antd';

import CascadeBadge from '../../assets/img/cascade-badge.png'
import ThunderBadge from '../../assets/img/thunder-badge.png'
import EarthBadge from '../../assets/img/earth-badge.png'

import '../../assets/styles/home.css';
import { themeStyle } from "../../utils/style.js";

const Home = ({ theme }) => {
    const { color } = themeStyle(theme)
    return (
        <div className={`home`}>
        <Image
            preview={false}
            src="http://placehold.it/3000x1000"
            width={'100%'}
        />
        <Row justify={"center"}>
            <Col xs={{ span: 6 }}>
            <Button
                style={{ color: color }}
                size={'large'}
                type={'link'}
                shape={'circle'}
                href={'/about'}
                icon={<Avatar size={64} src={CascadeBadge} />}
                block
            >About Me</Button>
            </Col>
            <Col xs={{ span: 6 }} >
            <Button 
                style={{ color: color }}
                size={'large'}
                type='link'
                shape='circle'
                href={'/projects'}
                icon={<Avatar size={64} src={ThunderBadge} />}
                block
            >Projects</Button>
            </Col>
            <Col xs={{ span: 6 }}>
                <Button 
                    style={{ color: color }}
                    size={'large'}
                    type={'link'}
                    shape={'circle'}
                    href={'/knowledge'}
                    icon={<Avatar size={64} src={EarthBadge} />}
                    block
                >Blog</Button>
            </Col>
        </Row> 
        </div>
    )
}
export default Home;