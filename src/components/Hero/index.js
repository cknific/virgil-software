import { Button, Container } from 'reactstrap'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #18bc9c;
  color: #fff;
  padding: 8rem 0;
`

const StyledDiv = styled.div`
  max-width: 40rem;
`

const StyledButton = styled(Button)`
  && {
    border-color: white;
    background-color: transparent;
    color: white;

    &:hover {
      background-color: #efefef;
      color: #333;
    }
  }
`

const Hero = () => (
  <Wrapper>
    <Container>
      <h1 className="display-4">Virgil Does Software.</h1>
      <StyledDiv>
        <p className="lead">Product management, front-end development, and UX/UI design for enterprise and consumer markets.</p>
      </StyledDiv>
      <StyledButton outline color="secondary" size="lg">Get In Touch</StyledButton>
    </Container>
  </Wrapper>
)

export default Hero