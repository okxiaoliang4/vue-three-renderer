import { Scene } from 'three'
import { sceneSymbol } from './symbol'

export default defineComponent({
  setup(props, { expose, slots }) {
    const scene = new Scene()
    provide(sceneSymbol, scene)

    expose({ scene })

    return () => slots.default?.()
  },
})
