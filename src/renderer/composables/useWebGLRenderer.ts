import type { MaybeRef } from '@vueuse/core'
import type { ColorRepresentation } from 'three'
import { Color, WebGLRenderer } from 'three'

export interface UseWebGLRendererOptions {
  width: MaybeRef<number>
  height: MaybeRef<number>
  clearColor?: MaybeRef<ColorRepresentation>
  shadowMapEnabled?: MaybeRef<boolean>
}

export function useWebGLRenderer(canvas: MaybeRef<HTMLCanvasElement>, options: UseWebGLRendererOptions) {
  const renderer = shallowRef<WebGLRenderer>(new WebGLRenderer())

  watchEffect(() => {
    renderer.value = new WebGLRenderer({
      canvas: unref(canvas),
    })
  })

  watchEffect(() => {
    const {
      width = 300,
      height = 300,
      clearColor = 0xFFFFFF,
      shadowMapEnabled = false,
    } = options

    if (renderer.value) {
      // set renderer size
      renderer.value.setSize(unref(width), unref(height))

      // set background color
      renderer.value.setClearColor(new Color(unref(clearColor)), 1)

      // enable shadow map
      renderer.value.shadowMap.enabled = unref(shadowMapEnabled) ?? false
    }
  })

  return { renderer }
}
