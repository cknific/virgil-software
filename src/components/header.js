import { Container } from 'reactstrap'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #18bc9c;
  padding: 1rem 0;
`

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container fluid>
      <span>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </span>
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
