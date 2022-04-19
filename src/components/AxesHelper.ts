import type { Scene } from 'three'
import { sceneSymbol } from './symbol'
import { useAxesHelper } from '~/composables/useAxesHelper'

export default defineComponent({
  name: 'AxesHelper',
  props: {
    size: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const scene = inject<Scene>(sceneSymbol)
    const helper = useAxesHelper(scene, props)

    return {
      helper,
    }
  },
  render: () => null,
})
