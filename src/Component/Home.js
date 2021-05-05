import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import Movies from './Movies';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';


import db from '../firebase';

const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
            db.collection('movies').onSnapshot((snapshot)=>{
                 let tenMovies = snapshot.docs.map((doc)=>{
                    
                     return { id: doc.id, ...doc.data()}
                 })
              dispatch(setMovies(tenMovies));

            })
    }, [])
    return (
        <Container>
          <ImgSlider />
          <Viewer />
          <Movies />
          
        </Container>
    );
};

export default Home;

const Container = styled.main`
   min-height: calc(100vh - 70px);
   padding: 0 calc( 3.5vw + 5px);
   position:relative;
   overflow:hidden;

   &:before{
       background: url('/images/home-background.png') center  center / cover  
       no-repeat fixed;
       content:"";
       position: absolute;
       top:0;
       left:0;
       right:0;
       bottom:0;
       z-index: -1

   }




`