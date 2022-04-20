import Camera from './Camera'
import { useCamera } from '~/composables/useCamera'
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

    // ! is a types bug.
    // @ts-expect-error multiple level extends types hint error.
    useCamera(instance, props)

    return {
      instance,
    }
  },
  render: () => null,
})
