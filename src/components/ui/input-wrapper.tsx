import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const InputWrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('mb-4', className)} ref={ref} {...props}>
        {props.children}
      </div>
    )
  }
)

InputWrapper.displayName = 'InputWrapper'

export { InputWrapper }
