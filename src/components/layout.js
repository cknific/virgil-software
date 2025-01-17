import Footer from './Footer'
import PropTypes from "prop-types"
import Navigation from "./Navigation"
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
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
