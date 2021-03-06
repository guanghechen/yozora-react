import cn from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export interface BlockquoteProps {
  /**
   * Blockquote content.
   */
  children?: React.ReactNode
  /**
   * Root css class of the component.
   */
  className?: string
  /**
   * Root css style.
   */
  style?: React.CSSProperties
}

/**
 * Render yozora `blockquote`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#blockquote
 * @see https://www.npmjs.com/package/@yozora/tokenizer-blockquote
 */
export function Blockquote(props: BlockquoteProps): React.ReactElement {
  const { children, className, style } = props
  return (
    <blockquote className={cn('yozora-blockquote', className)} style={style}>
      {children}
    </blockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Blockquote.displayName = 'YozoraBlockquote'
export default Blockquote
