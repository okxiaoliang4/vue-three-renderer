import type { PerspectiveCamera } from 'three'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    camera: {
      type: Object as PropType<PerspectiveCamera>,
      required: true,
    },
    renderer: {
      type: HTMLElement,
    },
  },
  setup(props, { expose }) {
    const controls = ref<ThreeOrbitControls>()

    watchEffect(() => {
      controls.value = new ThreeOrbitControls(props.camera, props.renderer)
    })

    expose({ controls })

    return () => null
  },
})
