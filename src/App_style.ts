import styled, { createGlobalStyle, keyframes } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: auto;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color:black ;

    @media(min-width:375px){
        overflow:hidden;
    }
}
`
const Animation = keyframes`
 0%,
  100% {
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
      0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
    color: #fed128;
  }
  50% {
    text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
      0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
    color: #806914;
  }
`

const Animation2 = keyframes`
 0%,
  100% {
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
      0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
    color: #28d7fe;
  }
  50% {
    text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
      0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
    color: #146c80;
  }`

export const WheelContainer = styled.div`
    width: 20em;
    height: 20em;
    margin: 0 auto;
    margin-top: 5em;
    position: relative;

`

export const SpinButton = styled.img`
    margin: 3em auto;
    display: block;
    width: 10rem;
    cursor: pointer;

    @media(min-width:375px){
        margin-top:20px;
    }
`

export const App = styled.div`
  font-family: sans-serif;
  text-align: center;

  .h1{
font-family:cursive;
font-size: 55px;
 animation: ${Animation} 1s ease infinite;
-moz-animation: ${Animation}  1s ease infinite;
-webkit-animation: ${Animation}  1s ease infinite;


@media(min-width:375px){
        font-size:45px;
    }

  }

  .h2{
font-family:cursive;
font-size: 75px;
 animation: ${Animation2} 1s ease infinite;
-moz-animation: ${Animation2}  1s ease infinite;
-webkit-animation: ${Animation2}  1s ease infinite;

@media(min-width:375px){
        font-size:55px;
    }
  }
`





export const SpanTag = styled.span`
    position: absolute;
    top: 10%auto;
    font-size: xx-large;
    right: 0;
    margin-right:200px ;
     animation: ${Animation} 1s ease infinite;
    -moz-animation: ${Animation}  1s ease infinite;
    -webkit-animation: ${Animation}  1s ease infinite;
    

    @media(min-width:280px){
        left:0;
        margin-left:50px;
    }

    @media(min-width:360px){
        left:0;
        margin-left:50px;
    }

    @media(min-width:375px){
        left:0;
        margin-left:50px;
    }
 
    `