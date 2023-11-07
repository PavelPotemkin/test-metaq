import { type ApiOptions, type Url } from '@/shared/kernel'

const trimSlash = (str: string) => {
  if (str.startsWith('/')) {
    str = str.slice(1)
  }

  if (str.endsWith('/')) {
    str = str.slice(0, str.length - 1)
  }

  return str
}

export const createApi = (baseURL: Url) => {
  baseURL = trimSlash(baseURL)

  return async <R>(url: Url, options?: ApiOptions): Promise<R> => {
    options = options || {
      method: 'get',
      payload: undefined
    }

    const method = options.method || 'get'
    const body = ['post', 'put'].includes(method) ? (options.payload ? JSON.stringify(options.payload) : null) : null

    url = `${trimSlash(url)}/`
    if (['get', 'delete'].includes(method) && options.payload) {
      url = `${url}?${new URLSearchParams(options.payload as Record<string, string>).toString()}`
    }
    const absoluteUrl = `${baseURL}/${url}`

    try {
      const result = await fetch(absoluteUrl, {
        body,
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (result.ok) {
        const json = await result.json()
        return json
      } else {
        throw new Error('something went wronf')
      }
    } catch (e) {
      console.error(e)
      throw new Error('something went wronf')
    }
  }
}
