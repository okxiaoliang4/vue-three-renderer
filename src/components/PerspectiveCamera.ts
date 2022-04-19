import { usePerspectiveCamera } from '~/composables/usePerspectiveCamera'

export default defineComponent({
  props: {
    fov: Number,
    aspect: Number,
    near: Number,
    far: Number,

    positionZ: Number,
  },
  setup(props, { expose }) {
    const { camera } = usePerspectiveCamera(props)
    expose({ camera })
    return () => null
  },
})
