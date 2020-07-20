import React from 'react'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { TalkCard } from '../components/talk'

import talks from '../data/talks'

export default ({ location }) => (
  <Layout location={location} title="Presentations">
    <Head title="Talks" />
    <h3>All of my talks, slides, and abstracts, in one place.</h3>
    <div className="talk-wrapper">
      {talks.map(t => (
        <TalkCard talk={t} key={t.id} />
      ))}
    </div>
  </Layout>
)
