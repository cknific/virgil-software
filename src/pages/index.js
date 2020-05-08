import { Container } from 'reactstrap'
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #18bc9c;
  color: #fff;
  text-align: center;
  padding: 5rem 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Container>
        <h1>Virgil Software</h1>
        <p>Virgil provides software consulting services, including product management, front-end development, and UX/UI design.</p>
      </Container>
    </Wrapper>
  </Layout>
)

export default IndexPage
