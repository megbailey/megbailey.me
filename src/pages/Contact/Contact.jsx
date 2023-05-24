import React, { useContext } from "react";
import { 
  Button, Form, Input, Row, Col, Divider
} from 'antd';

import { Text, Title, Paragraph } from "../../components/Text";

import { themeStyle } from "../../assets/styles/global.css"
import "../../assets/styles/contact.css"
import "../../assets/styles/wave.css"

const { TextArea } = Input;

const Contact = ({theme}) => {
  const { color } = themeStyle(theme)
  return (
    <>
    <Row >
      <Col>
        <Title>Say Hi <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></Title>
        <Divider style={{backgroundColor: color }}/>
      </Col>
    </Row>
  
    <Row justify="center" >
      <Form
        name="wrap"
        labelCol={{ span: 5 }}
        labelAlign="left"
        layout={'horizontal'}
        size={"large"}
        style={{ margin: '2%', width: '50%' }}
      >
        
          <Form.Item 
            className={`ant-form-item-${theme}`} 
            label={<Text >First Name</Text>}
            style={{width:'100%'}}
            name="firstname" 
            rules={[{ required: false }]}
          >
            <Input placeholder="Jane"/>
          </Form.Item>
          <Form.Item 
            className={`ant-form-item-${theme}`} 
            label={<Text >Last Name</Text>}
            name="lastname" 
            rules={[{ required: false }]}
          >
            <Input placeholder="Doe"/>
          </Form.Item>
        
        <Form.Item 
          className={`ant-form-item-${theme}`}
          label={<Text >Email</Text>}
          name="email"
          rules={[{ required: true }]}
        >
          <Input placeholder="janedoe@null.com" />
        </Form.Item>
        
      
        <Form.Item 
          className={`ant-form-item-${theme}`} 
          label={<Text >Message</Text> }
          name="message"
          rules={[{ required: true }]}
        >
          <TextArea rows={6} />
        </Form.Item>


        <Form.Item className={`ant-form-item-${theme}`}  wrapperCol={{span: 16, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
  </Row>
  </>
  )
}


export default Contact;