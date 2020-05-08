import { Container } from 'reactstrap'
import PropTypes from "prop-types"
import Header from "./header"
import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
