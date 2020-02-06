import React, { useState, useEffect } from 'react'
import { api } from '../../services/ApiGitHub'
import { List, ContainerCard, Override } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader"




export default () => {

    const [reposName, setReposName] = useState(null)
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        loadrepos().then( () =>{
            setLoading(false)
        }).catch((err) => {
            alert(err)
            setLoading(false)
        })
            
    }, [])

    return (
        <List>
            {reposName}
            <ClipLoader size={60} css={Override} color={"#7F0F99"} loading={loading} />
        </List>
        )
}