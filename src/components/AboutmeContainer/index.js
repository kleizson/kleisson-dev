import React from 'react'

import { ContainerAbout } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import imgProfile from '../../assets/img-perfil.jpeg'

export default () => (
    <ContainerAbout>
        <img src={imgProfile} alt="profile" />
        <h1>Kleisson</h1>
        <h5>Front-End Developer</h5>
        <p>Hi! Let me introduce myself, I'm Kleisson, 19 years old and an information systems student at federal institute of Alagoas, and i am also fascinated about AI and all the software development world.</p>
        <div>
            <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
        </div>
    </ContainerAbout>
)