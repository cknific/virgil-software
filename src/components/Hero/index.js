import breakpoint from 'styled-components-breakpoint'
import { Button, Container } from 'reactstrap'
import React from 'react'
import styled from 'styled-components'
import backgroundImage from './bg.svg'

const Wrapper = styled.div`
  background-color: #18bc9c;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  color: #fff;
  padding: 4rem 0;
  ${breakpoint('tablet')`
    padding: 8rem 0;
  `};
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

const SocialContainer = styled.div`
  margin: 1rem 0 0;
  font-size: 0.9rem;

  a {
    color: white;
  }
`

const Hero = () => (
  <Wrapper>
    <Container>
      <h1 className="display-4">Chris Knific</h1>
      <StyledDiv>
        <p className="lead">Product Manager. Front-end Developer. UX/UI Designer. Musician.</p>
      </StyledDiv>
      <StyledButton
        outline
        color="secondary"
        size="lg"
        href="#contact"
      >
        Get In Touch
      </StyledButton>
      <SocialContainer>
        <a href="https://www.github.com/cknific">GitHub</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/chris-knific">LinkedIn</a>
      </SocialContainer>
    </Container>
  </Wrapper>
)

export default Hero