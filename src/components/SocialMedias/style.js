import styled from "styled-components";

export const ContainerIcons = styled.div`

    ul{
        display: flex;
        list-style: none;
        justify-content: center;
    }
    li{
        margin-right: 2%;
        margin-top: 5%;
        transition: 1s;
        padding: 5px;
    }
    a{
        color: #fff;
        transition: 1s;
        
    }
    a:active{
        color: #000;
    }
    a:hover{
        color: #000; 
    }

    @media (max-width: 700px){
        &{
            margin-top: 25%;
        }
    }
`