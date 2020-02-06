import React, { useState, useEffect } from 'react'
import { api } from '../../services/ApiGitHub'
import { List, ContainerCard } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default () => {

    const [reposName, setReposName] = useState(null)

    async function loadrepos(){
        const response = await api.get('/users/kleizson/repos')
    setReposName(response.data.map((i) => {
            return (
                [
                <li key={i.id}>
                        <ContainerCard>
                            <div>
                                <h2 className="title">{i.name}</h2>
                                <span>Language: {i.language}</span>
                                <span>{i.description === null ? 'No description' : i.description }</span>
                                <span>Fork: {i.fork === true ? 'Yes' : 'No'}</span>
                                <a href={i.html_url} target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon id='svg' color="white" icon={faArrowRight} size={'2x'}/></a>
                            </div>
                        </ContainerCard>
                </li>
                ]
            )
        }))
    }
    
    useEffect(() => {
        loadrepos()
    })

    return (
        <List>
            {reposName}
        </List>
        )
}