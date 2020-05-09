import { Container } from 'reactstrap'
import { Link } from "gatsby"
import Logo from '../images/logo.png'
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
`

const StyledHeader = styled.header`
  background: #5c89d0;
  padding: 1rem 0;
`

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
    text-decoration: none;
  }
`

const StyledLogo = styled.img`
  margin-right: 0.5rem;
  width: 2rem;
`

const Header = () => (
  <StyledHeader>
    <Container fluid>
      <StyledLink to="/">
        <FlexContainer>
          <StyledLogo src={Logo} />
          Virgil Software
        </FlexContainer>
      </StyledLink>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
