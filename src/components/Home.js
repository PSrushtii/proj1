import React from 'react'
import Srush from './Srush'
import styled from 'styled-components'
import Srus from './Srus'
function Home() {
  return (
    <HiIamContainer>
    
    <Srus
      title="model Y"
      description="test"
      backgroundImg="model-y.jpg"    
    />
    <Srush
    title="model X"
    description="test"
    backgroundImg="model-x.jpg"    
    />

  <Srush
    title="model 3"
    description="test"
    backgroundImg="model-3.jpg"    
    />

    <Srus
    title="model S"
    description="test"
    backgroundImg="model-s.jpg"    
    />
    
    
    </HiIamContainer>
  )
  
}

  



export default Home
const HiIamContainer=styled.div`height=100vh`

 