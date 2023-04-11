import styled from 'styled-components'

export const MainCon = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    background-color:#93c5fd;
`

export const Con=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius:10px;
    padding:20px;
    padding-left:20px;
    @media screen and (max-width:576px){
        width:80%;
    }
`

export const Heading=styled.h1`
    color:#323f4b;
    font-weight: bold;
`
export const Contain=styled.div`
    display:flex;
    flex-direction: row;
`

export const Search=styled.select`
    color:black;
    padding:5px;
    width:40%;
    font-weight: bold;
`

export const Option=styled.option`
    padding:5px;
    font-weight: bold;
`

export const Span=styled.span`
    color:black;
    margin-left:5px;
`

export const Country=styled.p`
    font-weight: bold;
    color:#1e293b;
`