import { createGlobalStyle, keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

const animation = keyframes`${fadeInDown}`

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        background-color: #b9bae0;
        animation: 2s ${animation};
        background-image: url('./img/background-img.png');
        background-size: cover;
        background-position: center;
    }
`