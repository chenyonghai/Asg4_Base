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
import React, { Component } from 'react';
import run from './img/run.jpg'

class PostThumbnail extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div style={{cursor:"pointer"}}>
                <div >
                    <div>
                        <img style={{ width: "300px", height: "180px" }} src={this.props.data.featureImageUrl} alt="" />
                    </div>
                    <div>
                        <h2>{this.props.data.title}</h2>
                    </div>
                    <div>
                        <p style={{margin:"15px 0"}}>{this.props.data.description}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default PostThumbnail;