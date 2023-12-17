import React,{ Component ,useEffect, useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Typography, Flex, Form, Input, Row } from 'antd';

const { Title } = Typography;
const rowStyle = {
  'paddingTop':'2%',
}
export default function Login(params) {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
        return(
          <>
          <Row align={"middle"} justify={"center"}>
              <Title level={2}>Stocky</Title>
          </Row>
          <Row align={"middle"} justify={"center"}>
            <Title level={3}>Login to your account</Title>
          </Row>
            <Row align={"middle"} justify={"center"} style={rowStyle}>
            <Card  style={{ width: 400 }}>
              <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  <br/>
                  <br/>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                  <br/>
                  <br/>
                  <Flex justify={"center"} align={"center"}>
                  <Button type="primary" htmlType="submit"  className="login-form-button">
                    Log in
                  </Button>
                  </Flex>
                  <Flex justify={"center"} align={"center"}>
                  <br/>
                  Or
                  <br/>
                  </Flex>
                  <Flex justify={"center"} align={"center"}>
                  <a href="/register">register now!</a>
                  </Flex>
              </Form>
              </Card>
              </Row>
        </>
        )

}
