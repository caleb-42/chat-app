import { Box } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Helper from "../../../utils";
import { SignInForm, SignInSide } from "./SignInSlide";
import { SignUpForm, SignUpSide } from "./SignUpSlide";


const AuthSlide = styled(({ className = '' }) => {
  const [signIn, switchPage] = useState(true)

  return <Box className={className} height="100%" width="100%" bg="#B7C0CD">
    <main className="flex-con w-100 h-100">
      <Box w="100%" h="100%" overflow="hidden" minH="600px" maxH="900px" maxW="1300px" bg="#f5f5f5" className={`container ${signIn ? 'right-panel-active' : ''}`} id="container">
        <SignInForm switchPage={switchPage} />
        <SignUpForm switchPage={switchPage} />
        <div className="overlay-container">
          <div className="overlay">
            <SignInSide switchPage={switchPage} />
            <SignUpSide switchPage={switchPage} />
          </div>
        </div>
      </Box>
    </main >
  </Box >
})`
main{
  #container{
    position: relative;
    box-shadow: 0 0 1rem .51rem rgba(0,0,0, .1);

    &.right-panel-active .sign-in-container {
      transform: translateX(0%);
      opacity: 0;
    }

    &.right-panel-active .sign-up-container {
        transform: translateX(0%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    &.right-panel-active .overlay-container {
      transform: translateX(-100%);
    }

    &.right-panel-active .overlay {
      transform: translateX(50%);
    }

    &.right-panel-active .overlay-right {
      transform: translateX(20%);
    }
    &.right-panel-active .overlay-left {
      transform: translateX(0);
    }
  }
  .form-container{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;

    &.sign-in-container {
      left: 0;
      z-index: 2;
    }
    &.sign-up-container {
        left: 0;
        opacity: 0;
        z-index: 1;
    }

    form{
      h1{
        font-size: 1.8rem;
        color: rgb(32, 185, 147);
        font-weight: 500;
      }
      p{
        color: rgb(75, 75, 75);
        font-size: .85rem;
      }
      .form-group{
        width: 80%;
        margin: 1rem auto;
        input{
          border: none;
          outline: none;
          background: rgb(224, 224, 224);
          padding: .7rem;
          font-size: .9rem;
          width: 100%;
          margin: 0 auto;
          font-weight: 500;
        }
        .btn{
          display: block;
          margin: 0 auto;
        }
        .forgot-password{
          color: rgb(75, 75, 75);
          border-bottom: solid .1rem rgb(206, 206, 206);
          background: none;
          font-size: .85rem;
          font-weight: 600;
          border-radius: 0;
          padding: .5rem .3rem;
        }
        .signin{
          background:rgb(86, 177, 155);
          border-radius: 1.5rem;
          font-size: .8rem;
          font-weight: 600;
          padding: .8rem;
          letter-spacing: 2px;
          width: 50%;
          color: white;
        }
      }
    }
  }
  .overlay-container {
    position: absolute;
    display: none;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    .overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      transform: translateX(0);
      transition: transform 0.6s ease-in-out;
      /* background-image: url('/images/bg.webp'); */
      background-color: #4965AD;
      background-size: cover;
      color: white;
      text-align: center;

    }

    .overlay-panel {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 40px;
      text-align: center;
      top: 0;
      height: 100%;
      width: 50%;
      transform: translateX(0);
      transition: transform 0.6s ease-in-out;
      h1{
        font-size: 1.8rem;
        letter-spacing: 2px;
        font-weight: 800;
      }
     /*  button{
        background:transparent;
        border-radius: 1.5rem;
        border: solid .2rem white;
        font-size: .8rem;
        font-weight: 600;
        padding: .8rem;
        letter-spacing: 2px;
        width: 50%;
        color: white;
      } */
    }

    .overlay-left {
      transform: translateX(-20%);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }
  }
}

${({ theme }) => Helper.breakpoints(theme, 'md', 'up')} {
  main{
    #container{
      border-radius: 1rem;
      height: 80%;
      width: 60%;
    }
    .form-container{
      padding: 2rem 3rem;
    }
  }
}

${({ theme }) => Helper.breakpoints(theme, 'lg', 'up')} {
  main{
    #container{
      width: 70%;

      &.right-panel-active .sign-in-container {
        transform: translateX(100%);
      }

      &.right-panel-active .sign-up-container {
          transform: translateX(100%);
      }
      .form-container{
        width: 50%;
      }
      .overlay-container {
        display: block;
      }
    }
  }
}

@keyframes show {
  0%,
  49.99% {
      opacity: 0;
      z-index: 1;
  }

  50%,
  100% {
      opacity: 1;
      z-index: 5;
  }
}

`;

export default AuthSlide;