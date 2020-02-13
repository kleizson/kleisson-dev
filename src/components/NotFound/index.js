import React from 'react'

import { Container } from './style'

import NotfoundImg from '../../assets/notfound-img.png'

export default () => (
    <Container>
        <img src={NotfoundImg} alt="profile" width="30%" />
        <h1>PAGE NOT FOUND</h1>
    </Container>
)