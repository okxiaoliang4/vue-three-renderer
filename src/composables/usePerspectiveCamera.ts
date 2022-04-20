import type { MaybeRef } from '@vueuse/core'
import { PerspectiveCamera } from 'three'

export interface UsePerspectiveCameraOptions {
  fov?: MaybeRef<number>
  aspect?: MaybeRef<number>
  near?: MaybeRef<number>
  far?: MaybeRef<number>

  positionZ?: MaybeRef<number>
}

export function usePerspectiveCamera(props: UsePerspectiveCameraOptions) {
  const instance = new PerspectiveCamera(unref(props.fov), unref(props.aspect), unref(props.near), unref(props.far))

  watchEffect(() => {
    instance.position.z = unref(props.positionZ) ?? instance.position.z
  })

  return { instance }
}
