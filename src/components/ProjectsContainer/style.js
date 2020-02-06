import styled from "styled-components";

export const List = styled.ul` 
    display: flex;
    list-style: none;
    flex-wrap: wrap;
`

export const ContainerCard = styled.div`

@import url('https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed&display=swap');

    margin: 20px;
    display: flex;
    
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        height: 280px;
        width: 200px;
        background-color: rgb(178,166,202,0.5);
        border-radius: 10px;
        border: 2px solid white;
        transition: 0.4s ease-out;
        position: relative;
        left: 0px;
    }

    div:hover{
        transform: translateY(-10px);
        transition: 0.4s ease-out;
        box-shadow: 0 0 20px #331832;
    }
    
    span, h2{
        color: white;
        font-weight: 400;
        margin: 0 10px 0 10px;
        font-family: 'Encode Sans Semi Condensed', sans-serif;
        text-align: center;
    }
    #svg{
        transition: all .3s ease-in-out;
    }
    #svg:hover{
        transform: translateX(10px);
    }
`
