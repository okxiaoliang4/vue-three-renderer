import { Camera } from 'three'
import Object3D from './Object3D'
import { useCamera } from '~/composables/useCamera'

export default defineComponent({
  name: 'Camera',
  extends: Object3D,
  setup(props) {
    const instance = new Camera()

    useCamera(instance, props)

    return {
      instance,
    }
  },
  render: () => null,
})
