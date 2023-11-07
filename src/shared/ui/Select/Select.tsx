import type { BaseOption } from '@/shared/kernel'
import { type SelectHTMLAttributes, type ChangeEvent, useCallback, useRef, useEffect } from 'react'
import './style.css'

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  value: string | null
  options: BaseOption[]
  onChange: (value: string) => void
}

export const UiSelect = ({ value, options, onChange, ...args }: Props) => {
  const ref = useRef<HTMLSelectElement>(null)

  const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }, [onChange])

  return (
    <div className='ui-select'>
      <select ref={ref} value={String(value)} onChange={changeHandler} className='ui-select__native body' {...args}>
        {
          options.map(option =>
            <option key={String(option.value)} value={String(option.value)}>{option.label}</option>
          )
        }
      </select>
    </div>
  )
}
