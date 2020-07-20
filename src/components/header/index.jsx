import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const SubHeader = ({ title }) => (
  <h1 className="sub-header">
    <Link to={`/`} className="link">
      {title}
    </Link>
  </h1>
)

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return !isRoot && <SubHeader title={title} />
}
