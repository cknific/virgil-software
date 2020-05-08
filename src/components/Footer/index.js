import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
`

const Footer = () => (
  <FooterWrapper>
    <Container>
      © {new Date().getFullYear()} Virgil
    </Container>
  </FooterWrapper>
)

export default Footer
