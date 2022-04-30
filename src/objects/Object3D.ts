import { Object3D } from 'three'
import { useObject3D } from '~/objects/composables/useObject3D'

export default defineComponent({
  name: 'Object3D',
  props: {
    positionX: {
      type: Number,
      default: 0,
    },
    positionY: {
      type: Number,
      default: 0,
    },
    positionZ: {
      type: Number,
      default: 0,
    },
    rotationX: {
      type: Number,
      default: 0,
    },
    rotationY: {
      type: Number,
      default: 0,
    },
    rotationZ: {
      type: Number,
      default: 0,
    },
    lookAtX: {
      type: Number,
      default: 0,
    },
    lookAtY: {
      type: Number,
      default: 0,
    },
    lookAtZ: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const instance = new Object3D()

    useObject3D(instance, props)

    return {
      instance,
    }
  },
  render: () => null,
})
