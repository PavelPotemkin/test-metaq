export interface BaseOption<V = string> {
  label: string
  value: V
}

export type Primitive = boolean | number | string

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

export type Unique<T> = T
export type List<T> = T[]

export type AsyncFn = (...args: unknown[]) => Promise<unknown>

export type NumberLike = string
export type Comparable = string | number

export type DateString = string
export type TimeStamp = number
export type NumberYears = number

export type LocalFile = File
export type Image = LocalFile

export type Fractional = number
export type LocalizedString = string

export type EntityId = Unique<string>

declare const _brand: unique symbol
export interface Brand<B> { [_brand]: B }
export type Branded<T, B> = T & Brand<B>

export type Selector<T> = () => T
export type Provider<T> = () => T

export type Url = string

export type Status = Result['is']
export type Result =
  | { is: 'idle' }
  | { is: 'pending' }
  | { is: 'failure', error: Error | null }

export interface Command<F = AsyncFn> {
  execute: F
  result: Result
}

export interface ApiOptions {
  method: 'post' | 'put' | 'delete' | 'get'
  payload?: object
}

export type ApiRequest<R> = (url: Url, options: ApiOptions) => Promise<R>
