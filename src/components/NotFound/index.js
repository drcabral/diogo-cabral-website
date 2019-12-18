import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Home } from "styled-icons/boxicons-solid/Home"

import * as S from "./styled"

const NotFound = () => {
  const { catImage } = useStaticQuery(graphql`
    query {
      catImage: file(relativePath: { eq: "jack-the-cat.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <S.NotFoundWrapper>
      <S.NotFoundImage fluid={catImage.childImageSharp.fluid} />
      <S.NotFoundText>Não sou o que você procurava</S.NotFoundText>
      <S.NotFoundSubText>Que tal voltar então?</S.NotFoundSubText>
      <S.NotFoundLink to="/" title="Voltar para Home">
        <S.NotFoundItem>
          <Home />
        </S.NotFoundItem>
      </S.NotFoundLink>
    </S.NotFoundWrapper>
  )
}

export default NotFound
