import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Navlink,Link,useParams} from 'react-router-dom';
const API_KEY = '91a97855644d4ac99073441b467c9017'

function Cuisines() {
  const [cuisine,setCuisine] = useState([]);
  let params = useParams();
    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
        const recipies = await data.json();
        setCuisine(recipies.results);
    };
    useEffect(() => {
      getCuisine(params.type)
      console.log(params.type);
    
    },[params.type])
    return(
    <Grid>
        {cuisine.map((item,i)=>{
        return(
            <Card key={i}>
                <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
            </Card>);
})}
    </Grid>
    )}

const Grid = styled.div`
margin-top: 2rem;
display: grid;
grid-template-columns: 460px 460px 460px 460px;
grid-gap: 3rem`;

const Card = styled.div`
img{
    width: 50%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}`
export default Cuisines