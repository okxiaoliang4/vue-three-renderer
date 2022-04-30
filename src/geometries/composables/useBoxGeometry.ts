import type { MaybeRef } from '@vueuse/core'
import { BoxGeometry } from 'three'

export interface UseBoxGeometryOptions {
  width?: MaybeRef<number>
  height?: MaybeRef<number>
  depth?: MaybeRef<number>
  widthSegments?: MaybeRef<number>
  heightSegments?: MaybeRef<number>
  depthSegments?: MaybeRef<number>
}

export function useBoxGeometry(props: UseBoxGeometryOptions) {
  const instance = computed(() => new BoxGeometry(unref(props.width), unref(props.height), unref(props.depth), unref(props.widthSegments), unref(props.heightSegments), unref(props.depthSegments)))

  return { instance }
}
