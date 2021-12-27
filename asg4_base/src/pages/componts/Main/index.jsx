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
import PostThumbnail from '../PostThumbnail';
import run from '../PostThumbnail/img/run.jpg'
import sunset from '../PostThumbnail/img/sunset.jpg'
import painting from '../PostThumbnail/img/painting.jpg'
import concert from '../PostThumbnail/img/concert.jpg'
import bicycles from '../PostThumbnail/img/bicycles.jpg'
import {withRouter} from 'react-router-dom'
import {Card} from 'antd'
class Main extends Component {
    state = {
        data: null,
        con: null,
        flag: false
    }
    componentDidMount() {
        // var a = jsons
        var a = [
            {
                "id": "run",
                "featureImageUrl": run,
                "title": "Every day 1k, Doctor run away",
                "description": "Running is good for health.",
                "contents": "According to Wikipedia, Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting."
            },
            {
                "id": "sunset",
                "featureImageUrl": sunset,
                "title": "Praise the Sun",
                "description": "The Sun is a wondrous body. Like a magnificent father!",
                "contents": "The Sun's core fuses about 600 million tons of hydrogen into helium every second, converting 4 million tons of matter into energy every second as a result. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat. When hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand, eventually transforming the Sun into a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable – but not for about five billion years. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion."
            },
            {
                "id": "painting",
                "featureImageUrl": painting,
                "title": "Do you like drawing?",
                "description": "Painting is an important form in the visual arts",
                "contents": "Painting is the practice of applying paint, pigment, color or other medium to a solid surface (called the \"matrix\" or \"support\"). The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. In art, the term painting describes both the act and the result of the action (the final work is called \"a painting\"). The support for paintings includes such surfaces as walls, paper, canvas, wood, glass, lacquer, pottery, leaf, copper and concrete, and the painting may incorporate multiple other materials, including sand, clay, paper, plaster, gold leaf, and even whole objects."
            },
            {
                "id": "concert",
                "featureImageUrl": concert,
                "title": "Memorable Day!",
                "description": "This is the first time I went to a concert",
                "contents": "According to Wikipedia, A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig. Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters."
            },
            {
                "id": "bicycles",
                "featureImageUrl": bicycles,
                "title": "Olympic GO GO!",
                "description": "Bicycle seems fun",
                "contents": "According to Wikipedia, The cycling competitions of the 2020 Summer Olympics in Tokyo featured 22 events in five disciplines. The 2020 Olympics were postponed to 2021 due to the COVID-19 pandemic. Cycling competitions had been contested in every Summer Olympics programme since the first modern Olympiad in 1896 alongside athletics, artistic gymnastics, fencing and swimming. Since the 1896 contests which featured five track events and an 87 km road race from Athens to Marathon and back, Olympic cycling had gradually evolved to include women's competitions, mountain bike and BMX to arrive at the current 22 events. The cycling program for this edition was expanded with 4 more events than those held in 2016. BMX freestyle was added in the program for the first time and there will also be a return of Madison events on the track that had been removed from the Olympic program in 2008."
            }
        ]
        console.log(a);
        this.setState({
            data: a
        })
    }
    clicks(e) {
        this.props.history.push({ pathname : '/post',query:{ data: e} })
    }
    render() {
        console.log(this.state.data);
        return (
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "15px",justifyContent:"space-around" }}>
                {
                    this.state.data ? this.state.data.map((res, i) => {

                        return <div key={i} onClick={()=>this.clicks(res)} style={{ width: "50%",display:"flex",justifyContent:"center", textAlign: "center",margin:"15px 0" }}><Card style={{width:"60%"}} hoverable><PostThumbnail data={res}></PostThumbnail></Card></div>
                    }) : <div></div>
                }
                

            </div>
        );
    }
}

export default withRouter(Main) ;