import React from 'react'

import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import money from '../img/money.svg'
import home2 from '../img/home2.png'

import styled from 'styled-components'

import { Wrapper, Description, Image} from '../styles'
import { useScroll } from './useScroll'
import { fade } from '../animation'


const ServicesSection = () => {
    const [element, controls] = useScroll()

    return (
        <ServicesWrapper 
            variants={fade} 
            ref={element} 
            animate={controls} 
            initial="hidden"
        >
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt=""/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt=""/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </ServicesWrapper>
    )
}

const ServicesWrapper = styled(Wrapper)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1300px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`


export default ServicesSection