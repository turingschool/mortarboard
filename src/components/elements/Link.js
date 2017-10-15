// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { isNil } from 'ramda'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/networking'

type Props = {
  children: Node,
  href?: string | null,
  to?: string | null,
}

// TODO: Does not handle #hastag links correctly
const LinkComponent = ({ children, href, to, ...props }: Props) => {
  if (!isNil(to)) {
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

const RouterLink = glamorous(Link)(({ children, ...props }) => ({ ...props }))

const ExternalLink = glamorous.a(({ children, ...props }) => ({ ...props }))
