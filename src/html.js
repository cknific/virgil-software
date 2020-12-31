import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable react/jsx-props-no-spreading, react/no-danger */
const HTML = ({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) => (
  <html
    {...htmlAttributes}
    lang="en-US"
    prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#"
  >
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        id="___gatsby"
        key="body"
      />
      {postBodyComponents}
    </body>
  </html>
)
/* eslint-enable react/jsx-props-no-spreading, react/no-danger */

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  bodyAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  headComponents: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  ),
  htmlAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  postBodyComponents: PropTypes.arrayOf(PropTypes.object),
  preBodyComponents: PropTypes.arrayOf(PropTypes.object),
}

HTML.defaultProps = {
  bodyAttributes: [],
  headComponents: [],
  htmlAttributes: [],
  postBodyComponents: [],
  preBodyComponents: [],
}

export {
  HTML,
}
export default HTML
