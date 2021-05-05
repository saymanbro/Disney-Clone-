import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Movies = () => {
    const movie = useSelector(selectMovies);

    return (
        <Container>
                    <h4> Recommended For You </h4>
                <Content>

                    {   movie && 
                        movie.map((movie)=>(
                            <Wrap key={movie.id}>
                                  <Link to={`/detail/${movie.id}`}>
                                  <img src={movie.cardImg} alt=""/>
                                  </Link>
                            </Wrap>
                        )
                    
                         ) }

                    
                  
                </Content>
        </Container>
    );
};

export default Movies;

const Container = styled.div`
 
     h4{

        margin: 30px 0;
     }
`

const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4, minmax(0, 1fr));


`


const Wrap = styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgb(249, 249, 249, 0.1);
box-shadow:rgb(0 0 0 /69%) 8px 26px 30px -10px,
rgb( 0 0 0 / 73%) 8px 26px 10px -10px;
transition: all .3s ease-out;
cursor:pointer;

        img{
            width:100%;
            height:100%;
            object-fit:cover
        }
        &:hover{
            transform:scale(1.05);
            box-shadow:rgb(0 0 0 /69%) 8px 26px 30px -10px,
            rgb( 0 0 0 / 73%) 8px 26px 10px -10px;
            border-color:rgb(249, 249, 249, 0.2)

        }
`