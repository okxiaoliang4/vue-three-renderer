import Camera from './Camera'
import { usePerspectiveCamera } from '~/composables/usePerspectiveCamera'

export default defineComponent({
  name: 'PerspectiveCamera',
  extends: Camera,
  props: {
    fov: Number,
    aspect: Number,
    near: Number,
    far: Number,
  },
  setup(props) {
    const { instance } = usePerspectiveCamera(props)

    return {
      instance,
    }
  },
  render: () => null,
})
