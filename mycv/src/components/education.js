import React, { useEffect, useState } from "react";
import "../css/education.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../images/profile.png";
import ssc from "../images/ssc.jpg";
import hsc from "../images/hsc.jpg";
import bsc from "../images/bsc.jpg";
import Demo from "../images/TheStarryNightBlack.jpeg"
import Typed from "typed.js";
//import ScrollReveal from "../Animation/scrollreveal";
import Reveal from "../Animation/reveal";
//import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
//import { Parallax } from 'react-parallax';
//import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
//import { Fade, Roll, Bounce, Slide, Zoom } from 'react-reveal';
//import FadeOnScroll from '../Animation/fadescroll';
import Scroll from "../Animation/scroll"
import Popup from "../Animation/popup";
import Scrolldown from "../Animation/scrolldown";

function Education() {
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleClick = (divName) => {
        setSelectedDiv(divName === selectedDiv ? null : divName);
    };

    const renderDetails = (divName, details) => {
        if (selectedDiv === divName) {
            return (
                <Popup>
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {details}
                    </div>
                </Popup>
            )


        }
        return null;
    };

    return (
        <>
            <section id="education" className="edusection">
                <div className=" education">
                    <div className="edutitle">
                        <Scrolldown>
                            <h4>Education Qualification</h4>
                        </Scrolldown>

                    </div>
                    <div>
                    &emsp;
                </div>

                    <Scroll>
                        <div className="edumaindiv">
                            <div className="card col-12 col-md-3 mb-3 subedudiv" >
                                <img src={bsc} className="card-img-top"  style={{height:'125px',objectFit:'cover'}} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">CGPA: 3.22 out of 4.00 from National UNiversity</p>
                                </div>
                            </div>

                            <div className="card col-12 col-md-3 mb-3 subedudiv" >
                            
                                    <img src={hsc} className="card-img-top" style={{height:'125px',objectFit:'cover'}} alt="..." />
                            
                            
                                <div className="card-body">
                                    <p className="card-text">GPA: 4.43 out of 5.00 from Govt. Laboratory High School in Science</p>
                                </div>
                            </div>

                            <div className="card col-12 col-md-3 mb-3 subedudiv" >
                                <img src={ssc} className="card-img-top"  style={{height:'125px',objectFit:'cover'}} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">GPA: 5.00 out of 5.00 from Govt. Science College Attached High School in Science</p>
                                </div>
                            </div>

                            <div className="card col-12 col-md-3 mb-3 subedudiv" >
                                <img src={Demo} className="card-img-top"  style={{height:'125px',objectFit:'cover'}} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Not Started Yet</p>
                                </div>
                            </div>
                        </div>


                    </Scroll>





                </div>
                <div>
                    &emsp;
                </div>
                <div>
                    &emsp;
                </div>
            </section>
        </>
    )
};
export default Education;