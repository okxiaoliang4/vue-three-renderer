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
    const helper = useAxesHelper(props)
    const scene = inject<Scene>(sceneSymbol)

    scene?.add(helper.value)

    return {
      helper,
    }
  },
  render: () => null,
})
