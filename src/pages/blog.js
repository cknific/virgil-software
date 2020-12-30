import Layout from '../components/layout'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from 'Reactstrap'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const BlogHero = styled.div`
  text-align: center;
  padding: 6rem 0;
  background-color: #efefef;
`

const PostCard = styled.div`
  margin-bottom: 2rem;
  max-width: 600px;
`

const PostTitle = styled.h2`
  font-size: 1.25rem;
`

const PostDate = styled.h3`
  font-size: .75rem;
`

const PostList = styled.div`
  padding: 4rem 0;
`

const PostExcerpt = styled.p`
  color: #666;
  font-size: .9rem;
`

export default function Blog ({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title="Virgil Blog" />
      <BlogHero>
        <h1>Virgil Blog</h1>
        <p>Musings about software, music, running and life</p>.
      </BlogHero>
      <PostList>
        <Container>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <PostCard key={post.id}>
                  <PostTitle>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </PostTitle>
                  <PostDate>{post.frontmatter.date}</PostDate>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                </PostCard>
              )
            })
          }
        </Container>
      </PostList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
