import { Container } from 'reactstrap'
import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Wrapper = styled.div`
  background-color: #18bc9c;
  color: #fff;
  padding: 8rem 0 10rem;
`

const StyledDiv = styled.div`
  max-width: 40rem;
`

const FlexContainer = styled.div`
  display: flex;
`

const Hero = () => (
  <Wrapper>
    <Container>
      <StyledDiv>
        <FlexContainer>
          <Image />
          <h1>&nbsp;Under Construction</h1>
        </FlexContainer>
        <p>Meanwhile, Virgil Software continues to provide software product management, front-end development, and UX/UI design.</p>
      </StyledDiv>
    </Container>
  </Wrapper>
)

export default Hero