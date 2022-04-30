import { Color } from 'three'
import type { Scene } from 'three'
import type { PropType } from 'vue'
import { sceneSymbol } from '../common/symbol'
import { useAxesHelper } from './composables/useAxesHelper'

export default defineComponent({
  name: 'AxesHelper',
  props: {
    size: {
      type: Number,
      default: 20,
    },
    xColor: {
      type: Object as PropType<Color>,
      default: () => new Color(0xFF0000),
    },
    yColor: {
      type: Object as PropType<Color>,
      default: () => new Color(0x00FF00),
    },
    zColor: {
      type: Object as PropType<Color>,
      default: () => new Color(0x0000FF),
    },
  },
  setup(props) {
    const scene = inject<Scene>(sceneSymbol)
    const { helper } = useAxesHelper(scene, props)

    return {
      helper,
    }
  },
  render: () => null,
})
