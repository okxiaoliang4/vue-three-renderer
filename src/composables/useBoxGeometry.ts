import { BoxGeometry } from 'three'
import type { Ref } from 'vue'

export interface UseBoxGeometryOptions {
  width?: number
  height?: number
  depth?: number
  widthSegments?: number
  heightSegments?: number
  depthSegments?: number
}

export function useBoxGeometry(props: UseBoxGeometryOptions) {
  const geometry = ref() as Ref<BoxGeometry>

  watchEffect(() => {
    geometry.value = new BoxGeometry(props.width, props.height, props.depth, props.widthSegments, props.heightSegments, props.depthSegments)
  })

  return geometry
}
