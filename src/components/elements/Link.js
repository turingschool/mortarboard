// @flow
import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'

type Props = {
  children: React.Element<*>,
  href?: string,
  to?: string,
}

const Component = ({ children, href, to, ...props }: Props) => (
  to != null && (to.charAt(0) === '/' || to.charAt(0) === '#') ?
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
    :
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </ExternalLink>
)

Component.defaultProps = {
  href: null,
  to: null,
}

export default Component

// -------------------------------------

const RouterLink = glamorous(Link)(
  ({ children, ...props }) => ({ ...props }),
)

const ExternalLink = glamorous.a(
  ({ children, ...props }) => ({ ...props }),
)
