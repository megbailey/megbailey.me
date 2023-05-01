import React, { useState } from "react";
import { 
  Button, Form, Space, Input, Row
} from 'antd';
import Template from "../../../components/template/Template";

const { TextArea } = Input;

const Contact = () => {
  return (
    <Template 
      content={ <ContactContent /> }
    />
  )
}

const ContactContent = () => {
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
        <Form.Item label="First Name" name="firstname" rules={[{ required: false }]}>
          <Input placeholder="Jane"/>
        </Form.Item>
        <Form.Item label="Last Name" name="lastname" rules={[{ required: false }]}>
          <Input placeholder="Doe"/>
        </Form.Item>
      </Space>

      <Form.Item label="Email" name="email" rules={[{ required: false }]}>
        <Input placeholder="janedoe@null.com" />
      </Form.Item>
    
      <Form.Item label="Message" name="message" rules={[{ required: true }]}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
  </Form>
  </Row>
  )
}


export default Contact;