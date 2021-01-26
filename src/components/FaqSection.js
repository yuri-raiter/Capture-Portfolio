import React from 'react'

import styled from 'styled-components'
import { Wrapper } from '../styles'

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam debitis voluptates magni incidunt ducimus iste maiores est nemo? Quia minus ea facilis amet consequatur illo perferendis voluptatum nemo officiis!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam debitis voluptates magni incidunt ducimus iste maiores est nemo? Quia minus ea facilis amet consequatur illo perferendis voluptatum nemo officiis!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam debitis voluptates magni incidunt ducimus iste maiores est nemo? Quia minus ea facilis amet consequatur illo perferendis voluptatum nemo officiis!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam debitis voluptates magni incidunt ducimus iste maiores est nemo? Quia minus ea facilis amet consequatur illo perferendis voluptatum nemo officiis!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(Wrapper)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer
    }

    .answer {
        padding: 2rem 0;

        p {
            padding: 1rem 0;
        }
    }
`



export default FaqSection