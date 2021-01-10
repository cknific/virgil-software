import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Breadcrumb = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const IconContainer = styled.div`
  color: #adadad;
  height: 1.5rem;
  margin-right: 0.25rem;
  width: 1.5rem;
`

const ViewAllPosts = () => (
  <Link to="/blog">
    <Breadcrumb>
      <IconContainer>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      </IconContainer>
      View all Blog Posts
    </Breadcrumb>
  </Link>
)

export default ViewAllPosts
