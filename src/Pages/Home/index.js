import React from 'react'
import styled from "styled-components"
const Home = () => {
  return (
    <Wrapper>
      <p className='para'>Home</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.para{
  color:pink
}
`;
export default Home