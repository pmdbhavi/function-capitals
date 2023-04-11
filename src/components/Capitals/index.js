import {useState} from 'react'
import {MainCon,Con,Heading,Search,Option,Span,Country,Contain} from './styledComponents'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
  
const Capitals=()=>{
    const [capitalId,setCapitalId]=useState(countryAndCapitalsList[0].id)

    const getCountry=(event)=>{
        setCapitalId(event.target.value)
    }

    const findCapital=countryAndCapitalsList.find(each=>each.id===capitalId)


    return(
        <MainCon>
            <Con>
                <Heading>Countries and Capitals</Heading>
                <Contain>
                <Search onChange={getCountry} value={capitalId}>
                    {countryAndCapitalsList.map(eachItem=>
                    <Option key={eachItem.id} value={eachItem.id}>{eachItem.capitalDisplayText}</Option>
                        )}
                </Search>
                <Span>is capital of which country?</Span>
                </Contain>
                <Country>{findCapital.country}</Country>
            </Con>
        </MainCon>
    )
}  

export default Capitals