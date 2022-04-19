import type { MaybeRef } from '@vueuse/core'
import type { Camera } from 'three'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    camera: {
      type: Object as PropType<Camera>,
      required: true,
    },
    renderer: {
      type: HTMLElement,
    },
  },
  setup(props, { expose }) {
    const controls = useOrbitControls(props.camera, props.renderer)

    expose({ controls })

    return () => null
  },
})

export function useOrbitControls(camera: MaybeRef<Camera>, renderer?: MaybeRef<HTMLElement | undefined>) {
  const controls = ref<ThreeOrbitControls>()

  watchEffect(() => {
    if (unref(camera))
      controls.value = new ThreeOrbitControls(unref(camera), unref(renderer))
  })

  return { controls }
}
