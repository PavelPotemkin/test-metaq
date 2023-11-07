import { type AsyncFn, type Command, type Nullable, type Status } from '@/shared/kernel'
import { type Provider, useState } from 'react'

export const asCommand =
  <F extends AsyncFn>(command: F): Provider<Command<F>> =>
    () => {
      const [status, setStatus] = useState<Status>('idle')
      const [error, setError] = useState<Nullable<Error>>(null)

      const execute = (async () => {
        setStatus('pending')
        setError(null)

        try {
          await command()
          setStatus('idle')
        } catch (error) {
          setError(error as Error)
          setStatus('failure')
        }
      }) as F

      const result =
      status === 'failure' ? { is: status, error } : { is: status }

      return { result, execute }
    }

export const isAnyAsCommandPending = (asCommands: Command[]) => {
  return asCommands.some((asCommand) => asCommand.result.is === 'pending')
}

export const anyAsCommandError = (asCommands: Command[]) => {
  for (const asCommand of asCommands) {
    if (asCommand.result.is === 'failure') {
      return asCommand.result.error
    }
  }
}
