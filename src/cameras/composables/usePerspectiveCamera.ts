import type { MaybeRef } from '@vueuse/core'
import { PerspectiveCamera } from 'three'
import type { UseCameraOptions } from './useCamera'
import { useCamera } from './useCamera'

export interface UsePerspectiveCameraOptions extends UseCameraOptions {
  fov?: MaybeRef<number>
  aspect?: MaybeRef<number>
  near?: MaybeRef<number>
  far?: MaybeRef<number>
}

export function usePerspectiveCamera(props: UsePerspectiveCameraOptions) {
  const instance = new PerspectiveCamera(unref(props.fov), unref(props.aspect), unref(props.near), unref(props.far))

  useCamera(instance, props)

  return { instance }
}
