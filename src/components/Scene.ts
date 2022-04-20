import { Scene } from 'three'
import Object3D from './Object3D'
import { sceneSymbol } from './symbol'
import { useObject3D } from '~/composables/useObject3D'

export default defineComponent({
  name: 'Scene',
  extends: Object3D,
  setup(props) {
    const instance = new Scene()
    provide(sceneSymbol, instance)

    useObject3D(instance, props)

    return {
      instance,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
