import React from 'react'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { NowCard } from '../components/now'
import { formatDate, getMostRecentDate } from '../utils/dates'

import posts from '../data/now.js'

const mostRecentDate = getMostRecentDate(posts)
const mostRecentPost = Object.entries(posts[mostRecentDate])

export default ({ location }) => (
  <Layout location={location} title="What I'm Doing *Now*">
    <Head title="Now" />
    <h2>{formatDate(mostRecentDate)}</h2>
    <ul className="now-wrapper">
      {mostRecentPost.map(item => (
        <NowCard item={item} />
      ))}
    </ul>
    <a href="https://nownownow.com/about">What is this page?</a>
  </Layout>
)
