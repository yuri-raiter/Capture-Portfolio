import React from 'react'

import home1 from '../img/home1.png'

import { Wrapper, Description, Image, Hide } from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation } from '../animation'
import { Link } from 'react-router-dom'

import Wave from './Wave' 


const AboutSection = () => {

    return (
        <Wrapper>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <Link to="/contact-us">
                    <motion.button variants={fade}>Contact us</motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera"/>
            </Image>
            <Wave />
        </Wrapper>
    )
}

export default AboutSection