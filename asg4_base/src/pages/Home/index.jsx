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
import { Button, Comment, Tooltip, List,Card } from 'antd'
import moment from 'moment';
import Main from '../componts/Main'
import Header from '../componts/Header'


export default class index extends Component {
    render() {
        return (
            
                <div>
                    <Header></Header>
                    <Main></Main>
                </div>
        )
    }
}
