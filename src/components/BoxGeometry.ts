import { geometrySymbol } from './symbol'
import { useBoxGeometry } from '~/composables/useBoxGeometry'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  props: {
    width: Number,
    height: Number,
    depth: Number,
    widthSegments: Number,
    heightSegments: Number,
    depthSegments: Number,
  },
  setup(props, { expose }) {
    // sync geometry to parent
    const geometry = useBoxGeometry(props)

    useSyncInject(geometrySymbol, geometry)

    expose({
      geometry,
    })

    return () => null
  },
})
