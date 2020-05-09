/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet, StyleSheetManager } = require('styled-components')

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const serverStyleSheet = new ServerStyleSheet()

  replaceBodyHTMLString(
    renderToString(
      <StyleSheetManager sheet={serverStyleSheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    )
  )

  setHeadComponents([serverStyleSheet.getStyleElement()])
}
