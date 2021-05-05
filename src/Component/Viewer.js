import React from 'react';
import styled from 'styled-components'


const Viewer = () => {
    return (
        <Container>
       
        <Wrap>
            <img src="/images/viewers-disney.png" alt=""/>

        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt=""/>
            
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt=""/>
            
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt=""/>
            
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt=""/>
            
        </Wrap>
        </Container>
    );
};

export default Viewer;

const Container = styled.div`
 margin-top: 30px;
 display:grid;
 padding:30px 0 26px;
 grid-template-columns: repeat(5, minmax(0, 1fr));
 grid-gap:25px;
 


`
const Wrap = styled.div`
  border : 3px solid rgba(249, 249, 249, 0.2);
 border-radius :10px;
 cursor:pointer;
 box-shadow:rgb(0 0 0 /69%) 8px 26px 30px -10px,
 rgb( 0 0 0 / 73%) 8px 26px 10px -10px;
 transition: all .2s ease-out;
  img{
        width:100%;
        height:100%;
        object-fit:cover
  }
  &:hover{
      transform:scale(1.04);
      border-color: rgb(249, 249 , 249, 0.8)
  }
`