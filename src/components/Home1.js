import React from 'react'
import Srus from './Srus'
import styled from 'styled-components'
import Srush from './Srush'
function Home1() {
  return(
    <HiIamContainer>
    <Srus
    title="model S"
    description="test"
    backgroundImg="model-s.jpg"    
    />
    
    <Srush
    title="model 3"
    description="test"
    backgroundImg="model-3.jpg"    
    />



    </HiIamContainer>
  )
  
}

  



export default Home1
const HiIamContainer=styled.div`height=100vh`