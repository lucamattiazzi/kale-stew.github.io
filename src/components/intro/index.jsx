import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { getRandomItem } from '../../utils/helpers'

import './index.scss'

export const Intro = () => (
  <StaticQuery
    query={introQuery}
    render={data => {
      const {
        authorName,
        authorLocation,
        hobbies,
        company,
        employer,
      } = data.site.siteMetadata

      return (
        <div className="intro">
          <Image
            className="intro-image"
            fixed={data.avatar.childImageSharp.fixed}
            alt={authorName}
            style={{
              borderRadius: `100%`,
            }}
          />
          <div>
            👋 Hi, I'm <b>{authorName}</b>, a Software Engineer based in
            {authorLocation}.
          </div>
          <div>
            👩‍💻 I currently work at a {company} named <b>{employer}</b>.
          </div>
          <div>
            🏔️ When I'm not working, I like to {getRandomItem(hobbies)}.
          </div>
        </div>
      )
    }}
  />
)

const introQuery = graphql`
  query IntroQuery {
    avatar: file(absolutePath: { regex: "/headshot.png/" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        authorName
        authorLocation
        hobbies
        company
        employer
      }
    }
  }
`

export default Intro
