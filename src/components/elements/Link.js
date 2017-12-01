// @flow
import React, { type Node } from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
import { isNotNil } from '../../lib/utils'
import { BASE_URL } from '../../constants/networking'

type Props = {
  children: Node,
  href?: string | null,
  to?: string | null,
}

const LinkComponent = ({ children, href, to, ...props }: Props) => {
  if (isNotNil(to)) {
    const url = (to || '').includes(BASE_URL) ? to : `${BASE_URL}${(to || '')}`
    return (
      <RouterLink to={url} {...props}>
        {children}
      </RouterLink>
    )
  }
  return (
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </ExternalLink>
  )
}

LinkComponent.defaultProps = {
  href: null,
  to: null,
}

export default LinkComponent

// -------------------------------------

const RouterLink = glamorous(Link)()

const ExternalLink = glamorous.a()
