import { PlaneGeometry } from 'three'
import type { MaybeRef } from '@vueuse/core'
import { geometrySymbol } from '../common/symbol'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'PlaneGeometry',
  props: {
    width: Number,
    height: Number,
    widthSegments: Number,
    heightSegments: Number,
  },
  setup(props) {
    const { instance } = usePlaneGeometry(props)
    // sync geometry to parent
    useSyncInject(geometrySymbol, instance)

    return {
      instance,
    }
  },
  render: () => null,
})

export interface UsePlaneGeometryOptions {
  width?: MaybeRef<number>
  height?: MaybeRef<number>
  widthSegments?: MaybeRef<number>
  heightSegments?: MaybeRef<number>
}

function usePlaneGeometry(options: UsePlaneGeometryOptions) {
  const instance = computed(() => {
    const {
      width = 0,
      height = 0,
      widthSegments = 0,
      heightSegments = 0,
    } = options

    return new PlaneGeometry(
      unref(width),
      unref(height),
      unref(widthSegments),
      unref(heightSegments),
    )
  })

  return { instance }
}
