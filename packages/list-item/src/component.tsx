import cn from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from './style'

export interface ListItemProps {
  /**
   * Whether if is a TODO item, and given its status
   */
  status?: 'todo' | 'doing' | 'done'
  /**
   * ListItem content
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
 * Render yozora `listItem`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#listitem
 * @see https://www.npmjs.com/package/@yozora/tokenizer-list-item
 */
export function ListItem(props: ListItemProps): React.ReactElement {
  const { className = 'yozora-list-item', style, status, children } = props

  let checkbox: React.ReactNode = null
  if (status != null) {
    checkbox = (
      <span className="yozora-list-task-item__checkbox">
        <input type="checkbox" disabled={true} checked={status === 'done'} />
        <span data-status={status} />
      </span>
    )
  }

  return (
    <Container
      className={cn(
        'yozora-list-item',
        { 'yozora-list-task-item': status != null },
        className,
      )}
      style={style}
    >
      {checkbox}
      {children}
    </Container>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.oneOf<'todo' | 'doing' | 'done'>(['todo', 'doing', 'done']),
  style: PropTypes.object,
}

ListItem.displayName = 'YozoraListItem'
export default ListItem
