import { Scene } from 'three'
import { sceneSymbol } from './symbol'

export default defineComponent({
  name: 'Scene',
  setup() {
    const scene = new Scene()
    provide(sceneSymbol, scene)

    return {
      scene,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
