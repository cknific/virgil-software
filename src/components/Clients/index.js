import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #beece3;
  padding: 2rem 0 2.5rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin: 0 1rem;
  }
`

const TrustContainer = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: #666;
`

const Clients = () => (
  <Wrapper>
    <TrustContainer>Trusted By</TrustContainer>
    <FlexContainer>
      <img src="https://via.placeholder.com/300x90" />
      <img src="https://via.placeholder.com/300x90" />
      <img src="https://via.placeholder.com/300x90" />
    </FlexContainer>
  </Wrapper>
)

export default Clients
