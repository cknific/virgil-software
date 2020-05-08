import { Container } from 'reactstrap'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  padding: 2rem 0;
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
    <Container>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
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
