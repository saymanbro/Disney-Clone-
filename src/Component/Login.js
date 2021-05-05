import React from 'react';
import styled from 'styled-components';









const Login = () => {
    return (
        <Container>
       <CTA>
           <CTALogoOne src='/images/cta-logo-one.svg' />
           <SignUp>
          GET ALL THERE 
       </SignUp>

       <Description>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quasi voluptatum, aspernatur tempora officiis dolore inventore sunt, deserunt accusamus distinctio dignissimos aliquid accusantium fuga, suscipit molestiae odio reprehenderit ipsum.
       </Description>

       <CTALogoTwo src='/images/cta-logo-two.png' />
       </CTA>
       
        </Container>
    );
};

export default Login;

const Container = styled.div`
position:relative;
height:calc( 100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before{
    background-image: url(" /images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position:absolute;
    content:'';
    top:0;   
    bottom:0;
    left:0;
    right:0;
    opacity:0.7;
    z-index:-1;
   
}
`

const CTA = styled.div`
  max-width:650px;
  padding:80px 40px; 
  width:80%;
  display:flex;

  flex-direction:column;

`
const CTALogoOne = styled.img`


`

const SignUp = styled.a`
width:100%;
background:#0063e5;
padding: 17px 0;
color:#f9f9f9; 
font-weight:bold;
border-radius: 4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing: 1.4px;
margin-top:8px;
margin-bottom:15px;

&:hover{
    background: #8483ee;
}
`

const Description = styled.p`
 font-size:11px;
 letter-spacing: 1.5px;
 text-align:center;
 line-height:1.5; 





 `

 const CTALogoTwo = styled.img`
    margin-top: 20px;
 `