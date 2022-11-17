import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
const API_KEY = '91a97855644d4ac99073441b467c9017';

function Searched() {
    const [searchedRecipies, setSearchedRecipies] = useState([])
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        const recipies = await data.json();
        setSearchedRecipies(recipies.results);
    };

    useEffect( () => {
    getSearched(params.search);
     console.log(params.search);
    },[params.search])
  return (
    <Grid>
     {searchedRecipies.map((item)=>{
         return(
             <Card key={item.id}>
                 <Link to={'/recipe/' + item.id}>
                 <img src={item.image} alt='' />
                 <h4>{item.title}</h4>
                 </Link>
             </Card>
         )
     })}   
    </Grid>
  )
}
const Grid = styled.div`
margin-top: 2rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem`;

const Card = styled.div`
img{
    width: 50%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}`
export default Searched