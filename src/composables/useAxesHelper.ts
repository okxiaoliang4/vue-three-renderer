import type { MaybeRef } from '@vueuse/core'
import { AxesHelper } from 'three'
import type { Ref } from 'vue'

export function useAxesHelper(options: { size: MaybeRef<number> }) {
  const helper = shallowRef() as Ref<AxesHelper>

  watchEffect(() => {
    helper.value = new AxesHelper(unref(options.size))
  })

  return helper
}
