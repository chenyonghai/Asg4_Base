/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Li Xiaolong
 * Student ID : 1155172369
 * Date : 2021/12/2
 */
import React, { Component } from 'react'
import { Card, Form, Input, Button, List,message } from 'antd'
import Header from '../componts/Header'
import moment from 'moment'
import axios from 'axios'
const { TextArea } = Input;
const ip = 'http://8.140.142.149:3001'
export default class index extends Component {
    state = {
        date: []
    }
    inputRef = React.createRef()
  inputsRef = React.createRef()
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get(ip + '/posts').then((res) => {
            console.log(res);
            this.setState({
                data: res.data.message.reverse()
            })
        })
    }
    onFinish = (e) => {
        e.dateTime = moment().toDate().toISOString()
        console.log(e);
        axios.post(ip + "/messageBoard", {
            data: e
        }).then((res) => {
            console.log(res);
            this.getData()
            message.success("添加成功")
            this.inputRef.current.resetFields()
        })
    }
    render() {
        console.log(moment().toDate().toISOString());

        return (
            <div >
                <Header></Header>
                <Card style={{ width: "50%", height: "300px", margin: "20px auto" }}>
                    <Form
                        name="basic"
                        onFinish={this.onFinish}
                        ref={this.inputRef}
                    >
                        <Form.Item
                            label="Email address"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input  placeholder="name@example.com"  />
                        </Form.Item>
                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input message!',
                                },
                            ]}
                        >
                            <TextArea  placeholder='your message' showCount maxLength={100} style={{ height: 120 }} />
                        </Form.Item>

                        <Form.Item
                        >
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                            </div>

                        </Form.Item>
                    </Form>
                </Card>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <Card hoverable style={{ width: "50%", margin: "10px auto" }}>
                                <h2>
                                    {item.email}
                                </h2>
                                <div>
                                    {item.message}
                                </div>
                                <div style={{color:"#999999",fontSize:"12px",marginTop:"10px"}}>
                                    {item.dateTime}
                                </div>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
