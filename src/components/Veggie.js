import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide} from'@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
const API_KEY = '91a97855644d4ac99073441b467c9017'
const Veggie = () => {
    const[veggie,setVeggie]=useState([])
    useEffect(() => {
       random() 
    },[])
    async function random(){
      const check = localStorage.getItem('veggie');

      if(check){
        setVeggie(JSON.parse(check));
      }else{

const response = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`)
        const data = await response.json();
        localStorage.setItem('veggie',JSON.stringify(data.recipes));
        console.log(data)
        setVeggie(data.recipes)
    }
  }
  return (
    <Wrapper>
      <h3>Veggie Recipes</h3>
      <Splide options={{ perPage:4,arrows: false,
      pagination: false,
      drag: 'free',
      gap: '5rem'}}>
      {veggie.map((recipe,i)=>{
        return(
          <SplideSlide key={recipe.id}>
          <Card>
          <Link to={'/recipe/'  + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
            </Link>
          </Card>
          </SplideSlide>
        )
    })}
    </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  z-index: 10;  
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: white;
  width:100%;
  text-align: center;
   font-weight: 600;
   font-size: 1rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
}
`;

const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`
export default Veggie