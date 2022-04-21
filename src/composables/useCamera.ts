import type { MaybeRef } from '@vueuse/core'
import type { Camera } from 'three'
import type { UseObject3DOptions } from './useObject3D'
import { useObject3D } from './useObject3D'

export interface UseCameraOptions extends UseObject3DOptions {
  lookAtX?: MaybeRef<number>
  lookAtY?: MaybeRef<number>
  lookAtZ?: MaybeRef<number>
}

export function useCamera(camera: MaybeRef<Camera>, options: UseCameraOptions = {}) {
  useObject3D(camera, options)

  watchEffect(() => {
    const {
      lookAtX = 0,
      lookAtY = 0,
      lookAtZ = 0,
    } = options

    unref(camera).lookAt(unref(lookAtX), unref(lookAtY), unref(lookAtZ))
  })
}
