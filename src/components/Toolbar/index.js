import React from 'react'
import { List } from './style'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default () =>  {

    return (
        <header>
            <nav>
                <List>
                    <li><Link to="/aboutme">About me</Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} size="lg"/></Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </List>
            </nav>
        </header>
    )
}