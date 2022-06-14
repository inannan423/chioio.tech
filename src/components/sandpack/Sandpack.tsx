import * as React from 'react'
import cn from 'classnames'
import { Sandpack as CodeSandpack } from '@codesandbox/sandpack-react'
import { GlobalContext } from '@/contexts'

export const Sandpack: React.FC = () => {
  const { isDark } = React.useContext(GlobalContext)
  return <CodeSandpack template="react" theme={isDark ? 'dark' : 'light'} />
}

export const SandpackToggle: React.FC<{ toggle: () => void }> = ({
  toggle,
}) => {
  return (
    <button onClick={toggle} className={cn('fixed right-0 bottom-14')}>
      <div
        className={cn(
          'flex items-center justify-center px-1 py-3 space-y-1 rounded-r-xl bg-main-500 uppercase writing-v-lr'
        )}>
        <i
          className={cn(
            'flex-1 w-6 h-4',
            'before:inline-block before:w-3 before:h-2 before:border-2 before:border-white before:translate-y-[1px] before:translate-x-0.5',
            'after:inline-block after:w-3 after:h-2 after:border-2 after:border-white after:-translate-y-[1px] after:-translate-x-0.5'
          )}
        />
        <span className={cn('select-none text-sm font-medium !text-white')}>
          Sandpack
        </span>
      </div>
    </button>
  )
}