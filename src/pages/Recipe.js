import { useState,useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'
const API_KEY = '91a97855644d4ac99073441b467c9017'


function Recipe() {
   const [details, setDetails]= useState({})
   const [activetab,setActiveTab] = useState('instructions');
    let params = useParams();
    const fetchDetails = async() =>{
        const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}&`)
        const detailData = await data.json();
        console.log(detailData);
        setDetails(detailData);
    }

    useEffect(()=>{
        fetchDetails();
    },[params.name]);
  return ( 

    <DetailWrapper>
        <div>
            <h2>{details.title}
            </h2>
            <img src={details.image} alt='' />
        </div>
          <Info>
            <Button className={activetab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
            <Button className= {activetab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            {activetab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
            )}
            {activetab === 'ingredients' && (
                <ul>{details.extendedIngredients.map((ingredient)=>(
                <li key={ingredient.id}>{ingredient.original}</li>
               
            ))}
             </ul>
            )}
            </Info>
    </DetailWrapper>
  )
}

const DetailWrapper= styled.div`
margin-top:10rem;
margin-bottom: 5rem;
display: flex;
.active{
    background: linear-gradient(35deg,#494949, #313131);
    color: white;
}

h2{
    margin-bottom: 2rem;
}

li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
`;
const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 5rem;
`;

const Info = styled.div`
margin-left: 8rem;
`; 
export default Recipe