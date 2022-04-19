import type { MaybeRef } from '@vueuse/core'
import type { Scene } from 'three'
import { AxesHelper } from 'three'
import type { Ref } from 'vue'

export function useAxesHelper(scene: MaybeRef<Scene | undefined>, options: { size?: MaybeRef<number> } = {}) {
  const helper = shallowRef() as Ref<AxesHelper>

  watchEffect(() => {
    unref(scene)?.remove(helper.value)

    const { size = 20 } = options
    helper.value = new AxesHelper(unref(size))
    unref(scene)?.add(helper.value)
  })

  onUnmounted(() => {
    unref(scene)?.remove(helper.value)
  })

  return helper
}
