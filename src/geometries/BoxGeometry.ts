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
    // sync geometry to parent
    const { instance } = useBoxGeometry(props)

    useSyncInject(geometrySymbol, instance)

    return {
      instance,
    }
  },
  render: () => null,
})
