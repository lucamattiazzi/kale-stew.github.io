import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { Intro } from '../components/intro'
import { ProjectCard } from '../components/card'

import projects from '../../content/data/projects'

import { HOME_TITLE } from '../constants'

export default ({ data, location }) => {
  const { siteMetadata } = data.site

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
      <div className="lander">
        <Intro />
        <div className="project-wrapper">
          {projects.map(project => (
            <ProjectCard item={project} key={project.title} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/headshot.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
