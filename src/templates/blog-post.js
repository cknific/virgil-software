import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from 'Reactstrap'
import styled from 'styled-components'

const PostHero = styled.div`
  text-align: center;
  padding: 6rem 0;
  background-color: #efefef;
  margin-bottom: 4rem;
`

const PostBody = styled.div`
  margin-bottom: 4rem;
`

export default function Template ({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data

  return (
    <Layout>
      <Helmet title={`Virgil Blog | ${post.frontmatter.title}`} />
      <PostHero>
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <div>
            <span>{post.frontmatter.author}</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span>{post.frontmatter.date}</span>
          </div>
        </Container>
      </PostHero>
      <PostBody>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </PostBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
