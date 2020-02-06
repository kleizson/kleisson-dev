import React from 'react'
import { ContainerIcons } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export default () => (

    <ContainerIcons>
        <ul>
            <li>
                <a  href="https://github.com/kleizson" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='5x' />
                </a>
            </li>
            <li>
                <a  href="https://www.instagram.com/kleizson/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size='5x' />
                </a>
            </li>
            <li >
                <a  href="https://www.linkedin.com/in/kleisson-silva-53696a190/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} size='5x' />
                </a>
            </li>
        </ul>
    </ContainerIcons>


)