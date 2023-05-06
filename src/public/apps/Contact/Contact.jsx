import React, { useState } from "react";
import { 
  Button, Form, Space, Input, Row
} from 'antd';

import { Text } from "../../../components/text/Text";
import "./contact.css"
const { TextArea } = Input;

const Contact = ({ theme }) => {
  
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
          label={<Text theme={theme} text="First Name" />}
          name="firstname" 
          rules={[{ required: false }]}
        >
          <Input placeholder="Jane"/>
        </Form.Item>
        <Form.Item 
          className={`ant-form-item-${theme}`} 
          label={<Text theme={theme} text="Last Name" />}
          name="lastname" 
          rules={[{ required: false }]}
        >
          <Input placeholder="Doe"/>
        </Form.Item>
      </Space>

      <Form.Item 
        className={`ant-form-item-${theme}`}
        label={<Text theme={theme} text="Email" />}
        name="email"
        rules={[{ required: false }]}
      >
        <Input placeholder="janedoe@null.com" />
      </Form.Item>
    
      <Form.Item 
        className={`ant-form-item-${theme}`} 
        label={<Text theme={theme} text="Message" /> }
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