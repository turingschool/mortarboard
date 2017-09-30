// @flow
import { css } from 'glamor'

export const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

export const animateRotate = css.keyframes('animateRotate', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(720deg)' },
})

export const modalStyle = {
  overlay: {
    zIndex: 20,
    backgroundColor: 'rgba(255,255,255,.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    width: 600,
    height: 'auto',
    top: 'initial',
    left: 'initial',
    right: 'initial',
    bottom: 'initial',
    borderRadius: 2,
    padding: 0,
    border: 'none',
    background: 'none',
    boxShadow: '0 1px 7px rgba(0,0,0,.2)',
  },
}
