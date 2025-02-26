import React from "react";
import { Row, Button, Avatar,  Space, Image } from 'antd';
import { useSelector } from 'react-redux';

import '../../assets/styles/home.css';
import Illustration from '../../assets/img/Illustration.png'

import aboutLight from '../../assets/img/MeganLogo_icons-49.png'
import aboutDark from '../../assets/img/MeganLogo_icons-46.png'
import blogLight from '../../assets/img/MeganLogo_icons-48.png'
import blogDark from '../../assets/img/MeganLogo_icons-45.png'
import projectsLight from '../../assets/img/MeganLogo_icons-47.png'
import projectsDark from '../../assets/img/MeganLogo_icons-44.png'

const Home = () => {
    const theme = useSelector(state => state.theme.value)
    const { color } = theme.style

    return (
        <div className={`home`}>
            <Row justify={"center"}>
                <Image
                    src={Illustration}
                    preview={false}
                    height={window.innerHeight * .55 } 
                />
            </Row>
            <Row justify={"space-evenly"}>
                <Space size={25} wrap>
                    <Button
                        style={{ color: color }}
                        size={'large'}
                        type={'link'}
                        shape={'circle'}
                        href={'/about'}
                        icon={
                            <Avatar 
                                size={64} 
                                src={theme.mode === 'dark' ? aboutLight : aboutDark} 
                            />
                        }
                        block
                    >{'About Me'}</Button>
                    <Button
                        style={{ color: color }}
                        size={'large'}
                        type={'link'}
                        shape={'circle'}
                        href={'/projects'}
                        icon={
                            <Avatar 
                                size={64} 
                                src={theme.mode === 'dark' ? projectsLight : projectsDark} 
                            />
                        }
                        block
                    >{'Projects'}</Button>
                    <Button
                        style={{ color: color }}
                        size={'large'}
                        type={'link'}
                        shape={'circle'}
                        href={'/knowledge'}
                        icon={
                            <Avatar 
                                size={64} 
                                src={theme.mode === 'dark' ? blogLight : blogDark} 
                            />
                        }
                        block
                    >{'Blog'}</Button>
                </Space>
            </Row>
        </div>
    )
}
export default Home;