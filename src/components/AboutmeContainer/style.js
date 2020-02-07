import styled from "styled-components";

export const ContainerAbout = styled.div`

@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');

  width: 350px;
  padding: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  margin: auto;
  color:white;
  border: 1px solid white;
  box-shadow: 0 0 20px #331832;
  font-family: 'Nanum Gothic', sans-serif;
  div{
    color: white;
    margin-top: 10px;
  }

  div:hover{
    &:After{
      content: ' kleissonsilva.m@hotmail.com';
      font-size: 1.10rem;
      font-weight: 400;
      
    }
  }

  img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  h1{
    font-size: 2rem;
    letter-spacing: 4px;
    font-weight: 100;
    
  }

  h5{
    font-size: 1rem;
    letter-spacing: 3px;
    font-weight: 100;
    margin: 15px;
    
  }

  p{
    text-align: center;
    
    font-size: 1.25rem;
  }

  ul{
      list-style: none;

  }

  span{
      display: flex;
      color: white;
      
      font-size: 1.20rem;
  }

  @media (max-width: 700px){
    img{
        width: 100px;
        height: 100px;
    }
    h1{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
  }
  
`