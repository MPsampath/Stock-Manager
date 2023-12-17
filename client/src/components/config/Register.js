import React,{ Component ,useEffect, useState} from 'react'
import { LockOutlined,HomeOutlined, UserOutlined,MailOutlined,MobileOutlined } from '@ant-design/icons';
import { Button, Card, Typography, Flex, Form, Input, Row } from 'antd';
import {Toster} from 'react-hot-toast';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const { Title,Text } = Typography;

const rowStyle = {
  'paddingTop':'2%',
}
export default function Register() {

        const validate = values => {
            const errors = {};
            if (!values.name) {
            errors.name = 'Required';
            } 
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.address) {
                errors.address = 'Required';
            }
            if (!values.mobile) {
                errors.mobile = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                    }  
        
            return errors;
        };

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            address:'',
            mobile:'',
            password:''

        },
        validate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit: async values=>{
            axios.post('http://localhost:4000/users', {
                name: values.name,
                email: values.email,
                mobile:values.mobile,
                adress:values.address,
                password:values.password,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    })

   

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return(
        <>
            <Row align={"middle"} justify={"center"}>
                <Title level={2}>Stocky</Title>
            </Row>
            <Row align={"middle"} justify={"center"}>
            <Title level={3}>Register</Title>
            </Row>
            <Row align={"middle"} justify={"center"} style={rowStyle}>
            <Card  style={{ width: 400 }}>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                remember: true,
                }}
                onFinish={formik.handleSubmit}
                >
                    <Input
                    status={formik.errors.name?'error':''}
                    name='name' 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Name" />
                       {formik.errors.name ?<Text type="danger">{formik.errors.name}</Text> : null}
                    <br/>
                    <br/>

                    <Input
                    status={formik.errors.email?'error':''}
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    prefix={<MailOutlined className="site-form-item-icon" />} 
                    placeholder="Email" 
                    />
                    {formik.errors.email ?<Text type="danger">{formik.errors.email}</Text> : null}
                    <br/>
                    <br/>
                    <Input
                    status={formik.errors.address?'error':''}
                    name='address'
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    prefix={<HomeOutlined  className="site-form-item-icon" />} placeholder="Address" />
                       {formik.errors.address ?<Text type="danger">{formik.errors.address}</Text> : null}
                    <br/>
                    <br/>
                    <Input
                    status={formik.errors.mobile?'error':''}
                    name='mobile'
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                    prefix={<MobileOutlined  className="site-form-item-icon" />} placeholder="Mobile" />
                       {formik.errors.mobile ?<Text type="danger">{formik.errors.mobile}</Text> : null}
                    <br/>
                    <br/>
                    <Input
                    status={formik.errors.password?'error':''}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                       {formik.errors.password ?<Text type="danger">{formik.errors.password}</Text> : null}
                    <br/>
                    <br/>
                    <Flex justify={"center"} align={"center"}>
                        <Button type="primary" htmlType="submit"  className="login-form-button">
                        Register
                        </Button>
                    </Flex>
                    <Flex justify={"center"} align={"center"}>
                    <br/>
                    Or
                    <br/>
                    </Flex>
                    <Flex justify={"center"} align={"center"}>
                    <a href="/">Login</a>
                    </Flex>
                </Form>
                </Card>
                </Row>
        </>
    );
}