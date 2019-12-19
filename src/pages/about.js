import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from "../components/About"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Um pouco sobre mim, minhas skills e interesses"
    />
    <About />
  </Layout>
)

export default AboutPage
