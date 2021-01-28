import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { MovieState } from '../movieState'


const MovieDetail = () => {
    const { id } = useParams() // the current URL

    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const currentMovie = movies.filter(m => m.url === `/our-work/${id}`)
        setMovie(currentMovie[0])
    }, [id])

    return (
        <>
            {
                movie 
                    ? <Details>
                        <HeadLine>
                            <h2>{movie.title}</h2>
                            <img src={movie.mainImg} alt="image"/>
                        </HeadLine>
                        <Awards>
                            {
                                movie.awards.map(award => (
                                    <Award key={award.title} title={award.title} description={award.description}/>
                                ))
                            }
                        </Awards>
                        <ImageDisplay>
                            <img src={movie.secondaryImg} alt="image2"/>
                        </ImageDisplay>
                    </Details>
                    :
                        <h2>This page doesn't exist</h2>
            }
        </>
    )
}

const Details = styled.div`
    color: white;
`

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const AwardStyle = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }

    p {
        padding: 2rem 0;
    }
`

const ImageDisplay = styled.div`
    min-height: 50vh;

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

// Award Component
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail