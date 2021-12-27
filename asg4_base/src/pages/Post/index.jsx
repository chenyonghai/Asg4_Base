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
import { withRouter } from 'react-router-dom'
import { Button,Card } from 'antd'
import Header from '../componts/Header'

class index extends Component {
    render() {
        console.log(this.props.location.query.data);
        let res = this.props.location.query.data
        return (
            <div style={{height:"100vh"}}>
                <Header></Header>
                <Card hoverable style={{ width: "75%", margin: "10px auto" }}>
                    
                    <Button onClick={() => this.props.history.go(-1)}>Back</Button>
                    <h1>{res.title}</h1>
                    <div>{res.contents}</div>
                </Card>
            </div>

        )
    }
}
export default withRouter(index)
