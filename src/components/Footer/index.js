import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => (
  <footer>
    <Container>
      © {new Date().getFullYear()} Virgil
    </Container>
  </footer>
)

export default Footer
