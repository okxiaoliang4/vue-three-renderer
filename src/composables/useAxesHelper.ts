import type { MaybeRef } from '@vueuse/core'
import type { Scene } from 'three'
import { AxesHelper, Color } from 'three'

import type { Ref } from 'vue'

export interface UseAxesHelper {
  size?: MaybeRef<number>
  xColor?: MaybeRef<Color>
  yColor?: MaybeRef<Color>
  zColor?: MaybeRef<Color>
}

export function useAxesHelper(scene: MaybeRef<Scene | undefined>, options: UseAxesHelper = {
}) {
  const helper = shallowRef() as Ref<AxesHelper>

  watchEffect(() => {
    destory()

    const {
      size = 20,
      xColor = new Color(0xFF0000),
      yColor = new Color(0x00FF00),
      zColor = new Color(0x0000FF),
    } = options

    helper.value = new AxesHelper(unref(size))
    helper.value.setColors(unref(xColor), unref(yColor), unref(zColor))

    // add new helper
    unref(scene)?.add(helper.value)
  })

  onUnmounted(() => {
    destory()
  })

  /**
   * destory helper
   */
  function destory() {
    unref(scene)?.remove(helper.value)
  }

  return { helper, destory }
}
