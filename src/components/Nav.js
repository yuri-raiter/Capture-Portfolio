import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
    const { pathname } = useLocation()

    return (
        <StyledNav>
            <h1><Link id="logo" to="/"> Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line 
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/"
                         ? "100%" : "0%" 
                        }}
                    />
                </li>
                <li>
                    <Link to="/our-work">2. Our Work</Link>
                    <Line 
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/our-work"
                         ? "100%" : "0%" 
                        }}
                    />
                </li>
                <li>
                    <Link to="/contact-us">3. Contact Us</Link>
                    <Line 
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact-us"
                         ? "100%" : "0%" 
                        }}
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }

    li {
        position: relative;

        &:nth-child(-n + 2) { // the first two li
            margin-right: 10rem;
        }
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;

            li {
                padding: 0;
            }
        }
    }

    @media (max-width: 600px) {
        li:nth-child(-n + 2) {
            margin-right: 5rem;
        }
    }
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0;
    position: absolute;
    bottom: -50%;
`



export default Nav