import { PerspectiveCamera } from 'three'
import Camera from './Camera'
import { usePerspectiveCamera } from './composables/usePerspectiveCamera'

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
    const instance = new PerspectiveCamera(unref(props.fov), unref(props.aspect), unref(props.near), unref(props.far))

    usePerspectiveCamera(instance, props)

    return {
      instance,
    }
  },
  render: () => null,
})
