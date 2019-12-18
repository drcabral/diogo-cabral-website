import React from "react"

import SEO from "../components/seo"
import NotFound from "../components/NotFound"
import GlobalStyles from "../styles/global"

const NotFoundPage = () => (
  <>
    <SEO
      title="404: Não encontrado"
      description="A página requisitada não existe"
    />
    <GlobalStyles />
    <NotFound />
  </>
)

export default NotFoundPage
