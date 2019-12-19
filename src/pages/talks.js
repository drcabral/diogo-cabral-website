import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Talks from "../components/Talks"

const TalksPage = () => (
  <Layout>
    <SEO title="Talks" description="Página com as palestras que já dei" />
    <Talks />
  </Layout>
)

export default TalksPage
