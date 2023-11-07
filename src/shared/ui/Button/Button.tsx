import { type ButtonHTMLAttributes, type PropsWithChildren, useMemo } from 'react'
import './style.css'

type ButtonMode = 'primary' | 'secondary'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  mode: ButtonMode
}

const classes: Record<ButtonMode, string> = {
  primary: 'ui-button_mode_primary',
  secondary: 'ui-button_mode_secondary'
}

export const UiButton = ({ mode, children, ...args }: Props) => {
  const classNames = useMemo(() => [classes[mode], 'ui-button body'].join(' '), [mode])

  return (
    <button type='button' {...args} className={classNames}>
      {children}
    </button>
  )
}
