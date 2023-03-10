import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ArticleProps extends React.HTMLAttributes<HTMLElement> {}

const Card = React.forwardRef<HTMLElement, ArticleProps>(
  ({ className, ...props }, ref) => {
    return (
      <article
        className={cn(
          'overflow-hidden bg-white p-4 dark:bg-black md:rounded-md md:ring-1 md:ring-neutral-300 md:dark:ring-neutral-800',
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </article>
    )
  }
)

Card.displayName = 'Card'

export { Card }
