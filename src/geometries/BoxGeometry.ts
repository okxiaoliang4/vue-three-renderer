import { geometrySymbol } from '../common/symbol'
import { useBoxGeometry } from './composables/useBoxGeometry'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'BoxGeometry',
  props: {
    width: Number,
    height: Number,
    depth: Number,
    widthSegments: Number,
    heightSegments: Number,
    depthSegments: Number,
  },
  setup(props) {
    const { instance } = useBoxGeometry(props)

    // sync geometry to parent
    useSyncInject(geometrySymbol, instance)

    return {
      instance,
    }
  },
  render: () => null,
})
