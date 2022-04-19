import { usePerspectiveCamera } from '~/composables/usePerspectiveCamera'

export default defineComponent({
  name: 'PerspectiveCamera',
  props: {
    fov: Number,
    aspect: Number,
    near: Number,
    far: Number,

    positionZ: Number,
  },
  setup(props) {
    const { camera } = usePerspectiveCamera(props)

    return {
      camera,
    }
  },
  render: () => null,
})
