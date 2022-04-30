import type { MaybeRef } from '@vueuse/core'
import { WebGLRenderer } from 'three'

export interface UseWebGLRendererOptions {
  width: MaybeRef<number>
  height: MaybeRef<number>
}

export function useWebGLRenderer(canvas: MaybeRef<HTMLCanvasElement>, options: UseWebGLRendererOptions) {
  const renderer = shallowRef<WebGLRenderer>()

  onMounted(() => {
    renderer.value = new WebGLRenderer({
      canvas: unref(canvas),
    })
  })

  // reactive size
  watchEffect(() => {
    renderer.value?.setSize(unref(options.width), unref(options.height))
  })

  return { renderer }
}
