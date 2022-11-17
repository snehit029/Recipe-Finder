import React ,{useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const SubmitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/' + input)
        setInput('')
    }
  return (
    <FormStyle onSubmit={SubmitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input onChange={(e)=>setInput(e.target.value)}type='text' value={input} />
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
margin: 0rem 20rem;

div{
    width: 100%;
position: relative;

}
input {
color: black;
padding: 1rem 3rem;
font-size: 1.5rem;
border: none;
border-radius: 1rem;
outline: none;
width: 100%;
}
 svg{
     position: absolute;
     top: 50%;
     left: 0%;
     transform: translate(100%,-50%);
     color: black;
 }
`;
export default Search