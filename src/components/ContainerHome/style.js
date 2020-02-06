import styled from 'styled-components'

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed&display=swap');

    display:flex;
    position:relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    span{
    font-size: 3.5rem;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    color: #fff;
    margin-top: 6%;
    }
    p{
        margin-top: 2.5%;
        font-family: 'Encode Sans Semi Condensed', sans-serif;
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
    }
    @media (max-width: 700px) {
        span{
            font-size: 3rem;
        }
        p{
            font-size: 1.30rem;
            
        }
    }
  
`