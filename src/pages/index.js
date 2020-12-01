import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Hero from "../components/Hero"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Education />
    <Experience />
    <Contact />
  </Layout>
)

export default IndexPage
