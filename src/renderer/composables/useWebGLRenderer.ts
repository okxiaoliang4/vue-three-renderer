import type { MaybeRef } from '@vueuse/core'
import type { ColorRepresentation } from 'three'
import { Color, WebGLRenderer } from 'three'

export interface UseWebGLRendererOptions {
  width: MaybeRef<number>
  height: MaybeRef<number>
  clearColor?: MaybeRef<ColorRepresentation>
}

export function useWebGLRenderer(canvas: MaybeRef<HTMLCanvasElement>, options: UseWebGLRendererOptions) {
  const renderer = shallowRef<WebGLRenderer>(new WebGLRenderer())

  watchEffect(() => {
    renderer.value = new WebGLRenderer({
      canvas: unref(canvas),
    })
  })

  // reactive size
  watchEffect(() => {
    renderer.value?.setSize(unref(options.width), unref(options.height))
  })

  watchEffect(() => {
    const { clearColor = 0xFFFFFF } = options

    renderer.value?.setClearColor(new Color(unref(clearColor)), 1) // 设置背景
  })

  return { renderer }
}
