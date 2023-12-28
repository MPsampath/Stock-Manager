import React,{ Component ,useEffect, useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Typography, Flex, Form, Input, Row } from 'antd';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'

const { Title } = Typography;
const rowStyle = {
  'paddingTop':'2%',
}
export default function Login(params) {
  
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const history = useNavigate();
  async function onFinish(e){
   try {
     await axios.post("http://localhost:4000/login",{
      email,password
     })
     .then(res=>{
      if (res.data="Loged") {
        history('/',{state:{id:email}});
      }
     })
   } catch (error) {
    console.log(error);
   }
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
                  <Input onChange={(e)=>{setEmail(e.target.value)}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                  <br/>
                  <br/>
                  <Input onChange={(e)=>{setPassword(e.target.value)}} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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
