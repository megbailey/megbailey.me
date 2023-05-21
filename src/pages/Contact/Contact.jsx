import React, { useContext } from "react";
import { 
  Button, Form, Space, Input, Row
} from 'antd';

import { Text } from "../../components/Text";

import "../../assets/styles/contact.css"
import { ThemeContext } from "../../context/context";

const { TextArea } = Input;

const Contact = () => {
  const theme = useContext(ThemeContext)

  return (
    <Row  justify="center" >
    <Form
      name="wrap"
      labelCol={{ flex: '150px' }}
      labelAlign="left"
      //labelWrap
      wrapperCol={{ flex: 5 }}
      colon={false}
      style={{ maxWidth: 900 }}
    >
      <Space>
        <Form.Item 
          className={`ant-form-item-${theme}`} 
          label={<Text >First Name</Text>}
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
      </Space>

      <Form.Item 
        className={`ant-form-item-${theme}`}
        label={<Text >Email</Text>}
        name="email"
        rules={[{ required: false }]}
      >
        <Input placeholder="janedoe@null.com" />
      </Form.Item>
    
      <Form.Item 
        className={`ant-form-item-${theme}`} 
        label={<Text >Message</Text> }
        name="message"
        rules={[{ required: true }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item className={`ant-form-item-${theme}`}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
  </Form>
  </Row>
  )
}


export default Contact;