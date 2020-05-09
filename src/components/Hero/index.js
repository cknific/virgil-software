import { Container } from 'reactstrap'
import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Wrapper = styled.div`
  background-color: #18bc9c;
  color: #fff;
  padding: 8rem 0;
`

const StyledDiv = styled.div`
  max-width: 40rem;
`

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
`

const Hero = () => (
  <Wrapper>
    <Container>
      <FlexContainer>
        <Image />
        <h1 className="display-4">&nbsp;Site Under Construction</h1>
      </FlexContainer>
      <StyledDiv>
        <p className="lead">Meanwhile, Virgil Software continues to provide software product management, front-end development, and UX/UI design.</p>
      </StyledDiv>
    </Container>
  </Wrapper>
)

export default Hero