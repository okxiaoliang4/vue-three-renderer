import { PerspectiveCamera } from 'three'

export default defineComponent({
  props: {
    fov: Number,
    aspect: Number,
    near: Number,
    far: Number,

    positionZ: Number,
  },
  setup(props, { expose }) {
    const camera = new PerspectiveCamera(props.fov, props.aspect, props.near, props.far)

    watchEffect(() => {
      camera.position.z = props.positionZ ?? camera.position.z
    })

    expose({ camera })
    return () => null
  },
})
