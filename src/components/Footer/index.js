import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #293c4e;
  color: white;
  padding: 1rem;
  text-align: center;
`

const StyledDiv = styled.div`
  font-size: 0.75rem;
`

const Footer = () => (
  <FooterWrapper>
    <Container>
      © {new Date().getFullYear()} Virgil
      <StyledDiv>Site built by Chris Knific with GatsbyJS</StyledDiv>
    </Container>
  </FooterWrapper>
)

export default Footer
