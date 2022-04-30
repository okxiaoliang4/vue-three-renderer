import { OrthographicCamera } from 'three'
import Camera from './Camera'
import { useOrthographicCamera } from './composables/useOrthographicCamera'

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
    const instance = new OrthographicCamera(unref(props.left), unref(props.right), unref(props.top), unref(props.bottom), unref(props.near), unref(props.far))

    useOrthographicCamera(instance, props)

    return {
      instance,
    }
  },
  render: () => null,
})
