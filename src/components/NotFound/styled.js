import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background);
`

export const NotFoundText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: var(--postColor);
  text-align: center;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const NotFoundSubText = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
  color: var(--postColor);

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const NotFoundImage = styled(Img)`
  border-radius: 50%;
  height: 20.75rem;
  width: 20.75rem;

  ${media.lessThan("large")`
    height: 18.875rem;
    width: 18.875rem;
  `}
`

export const NotFoundLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const NotFoundItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 4.75rem;
  padding: 1.1rem;
  position: relative;
  width: 4.75rem;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
