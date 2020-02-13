import { createGlobalStyle, keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

import bg from '../assets/bg.jpg'

const animation = keyframes`${fadeInDown}`

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        animation: 2s ${animation};
        background-image: url('${bg}');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    }
    div{
        animation-name: transitionOpacity;
        animation-duration: 1s;
    }
@keyframes transitionOpacity {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`