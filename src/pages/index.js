import Clients from '../components/Clients'
import Hero from "../components/Hero"
import Layout from "../components/layout"
import React from "react"
import {
  Design,
  Development,
  ProductManagement
} from "../components/Services"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Clients />
    <ProductManagement />
    <Development />
    <Design />
  </Layout>
)

export default IndexPage
