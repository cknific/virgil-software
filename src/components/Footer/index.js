import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #293c4e;
  color: white;
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
