import { Container } from 'reactstrap'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../images/logo.png'

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledHeader = styled.header`
  background: #428be5;
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

const Navigation = () => (
  <StyledHeader>
    <Container fluid>
      <StyledLink to="/">
        <FlexContainer>
          <div>
            <StyledLogo src={Logo} />
            Chris Knific
          </div>
          <div>
            <StyledLink to="/blog">Blog</StyledLink>
          </div>
        </FlexContainer>
      </StyledLink>
    </Container>
  </StyledHeader>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
