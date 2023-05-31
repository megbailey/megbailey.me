import React from "react";
import { 
  Button, Form, Input, Row, Col, Divider
} from 'antd';

import { Text, Title } from "../../components/Text";

import { themeStyle } from "../../utils/style.js";
import "../../assets/styles/wave.css"

const { TextArea } = Input;

const Contact = ({theme}) => {
  const { color } = themeStyle(theme)
  const formItemStyle = { color: color, width:'100%' }
  return (
    <>
    <Row >
      <Col>
        <Title>Say Hi <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></Title>
        <Divider style={{ backgroundColor: color }}/>
      </Col>
    </Row>
  
      <Form
        name="wrap"
        labelCol={{ span: 5 }}
        labelAlign="left"
        layout={'horizontal'}
        size={"large"}
        style={{ margin: '2%', width: '50%' }}
      >
        
          <Form.Item 
            label={<Text >First Name</Text>}
            style={formItemStyle}
            name="firstname" 
            rules={[{ required: false }]}
          >
            <Input placeholder="Jane"/>
          </Form.Item>
          <Form.Item 
            className={`ant-form-item-${theme}`} 
            label={<Text >Last Name</Text>}
            style={formItemStyle}
            name="lastname" 
            rules={[{ required: false }]}
          >
            <Input placeholder="Doe"/>
          </Form.Item>
        
        <Form.Item 
          className={`ant-form-item-${theme}`}
          label={<Text >Email</Text>}
          style={formItemStyle}
          name="email"
          rules={[{ required: true }]}
        >
          <Input placeholder="janedoe@null.com" />
        </Form.Item>
        
      
        <Form.Item 
          className={`ant-form-item-${theme}`} 
          label={<Text >Message</Text> }
          style={formItemStyle}
          name="message"
          rules={[{ required: true }]}
        >
          <TextArea rows={6} />
        </Form.Item>


        <Form.Item  style={formItemStyle}  wrapperCol={{span: 16, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
  
  </>
  )
}


export default Contact;