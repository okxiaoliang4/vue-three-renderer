import type { MaybeRef } from '@vueuse/core'

export type ToMaybeRef<T> = {
  [k in keyof T]: MaybeRef<T[k]>
}
