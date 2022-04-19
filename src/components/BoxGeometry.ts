import { geometrySymbol } from './symbol'
import { useBoxGeometry } from '~/composables/useBoxGeometry'
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
    const geometry = useBoxGeometry(props)

    useSyncInject(geometrySymbol, geometry)

    return {
      geometry,
    }
  },
  render: () => null,
})
