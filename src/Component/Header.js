import React, {useEffect} from 'react';
import styled from 'styled-components';
import { 
    selectUserName,
    selectUserPhoto, 
    setUserLogin, 
    setSignOut
} from '../features/User/userSlice';
import { auth, provider } from '../firebase'
import { useSelector , useDispatch } from 'react-redux';
import { useHistory } from 'react-router';




const Header = () => {
    const history = useHistory()
    const dispatch  = useDispatch();
   
    
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged( async (user) =>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo:user.photoURL
                }))
                history.push('/')
            }
        })
    }, [])

     const signIn = () =>{
            auth.signInWithPopup(provider)
            .then((res)=>{
                let user = res.user
        
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo:user.photoURL
                }))
                history.push('/')
            })
 
     }
const signOut = () =>{ 
      auth.signOut()
      .then(()=>{
          dispatch(setSignOut());
          history.push('/')
      })
}
        return (
        <Nav>
           <Logo src= '/images/logo.svg' />
            {
                !userName ? (
                   <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                   </LoginContainer>
                ) : (
                    <>
                    <NavMenu>
                    <a >
                        <img src="/images/home-icon.svg" alt=""/>
                        <span>HOME</span>
                    </a>
                    <a >
                        <img src="/images/search-icon.svg" alt=""/>
                        <span>SEARCH</span>
                    </a>
                    <a >
                        <img src="/images/watchlist-icon.svg" alt=""/>
                        <span>WATCHLISTS</span>
                    </a>
                    <a >
                        <img src="/images/original-icon.svg" alt=""/>
                        <span>ORIGINALS</span>
                    </a>
                    <a >
                        <img src="/images/movie-icon.svg" alt=""/>
                        <span>MOVIES</span>
                    </a>
                    <a >
                        <img src="/images/series-icon.svg" alt=""/>
                        <span>  SERIES</span>
                    </a>

                </NavMenu>

                <UserImg onClick={signOut} src='images/profile.jpg' />
                </>
                )
            }
              
        </Nav>
    );
};

export default Header;
const Nav = styled.nav`
 height:70px;
 background:#09031b;
 display:flex;
 align-items:center;
 padding:0 36px;
 overflow:hidden;
  
`
const Logo = styled.img`
 width:80px
`
const NavMenu = styled.div`
   display:flex;
   flex:1;
   margin-left:25px;
  align-items:center;
   a{
       display:flex;
       align-items:center;
       padding:0 12px    ;
       cursor:pointer;
       img{
           height:20px
       };

       span{
           font-size:13px;
           letter-spacing:1.42px;
           position:relative;

           &:after{
               content:'';
               position:absolute;
               background:white;
               height:2px;
               left:0;
               right:0;
               bottom:-6px;
               opacity:0;
               transform-origin: left center;
               transform:scaleX(0);
            //    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transition:all .3s ease-out;
           }
       }
       &:hover{
           span:after{
            transform:scaleX(1);
            opacity:1
           }
       }
   }

   
`
const UserImg = styled.img`
  width:48px;
  height:48px;
  border-radius:50%;
  cursor:pointer;
`

const Login = styled.div`
    border:1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius:4px;
    latter-spacing: 1.5px;
    text-transform:uppercase;
    background: rgba( 0, 0, 0, 0.6);
    cursor:pointer;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color: transparent;
    }
`
const LoginContainer = styled.div`
        flex:1;
        display:flex;

        justify-content:flex-end;
`