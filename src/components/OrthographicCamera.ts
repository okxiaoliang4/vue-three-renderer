import Camera from './Camera'
import { useOrthographicCamera } from '~/composables/useOrthographicCamera'

export default defineComponent({
  name: 'OrthographicCamera',
  extends: Camera,
  props: {
    left: Number,
    right: Number,
    top: Number,
    bottom: Number,
    near: Number,
    far: Number,
  },
  setup(props) {
    const { instance } = useOrthographicCamera(props)

    return {
      instance,
    }
  },
  render: () => null,
})
