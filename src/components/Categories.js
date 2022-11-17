import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import React from 'react'

function Categories() {
  return (
    <List>
        <SLink to={'./cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        
        <SLink to={'./cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'./cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'./cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
`;
export default Categories