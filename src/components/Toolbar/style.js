import styled from 'styled-components'

export const List = styled.ul`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200&display=swap');

    display: flex;
    justify-content: space-evenly;
    list-style: none;
    a{
        text-decoration: none;
        color: #fff;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        transition: 0.5s;
        border-radius: 5px;
    }

    a:hover{
        color: #000;
    }

    li{
        margin: 30px;
    }

`