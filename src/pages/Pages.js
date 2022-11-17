import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cuisines from './Cuisines'
import Searched from './Searched'
import Recipe from './Recipe'
const Pages = () => {
  return (
    
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/cuisine/:type' element={<Cuisines />}></Route>
        <Route path='/searched/:search' element={<Searched />}></Route>
       <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
  
  )
}

export default Pages