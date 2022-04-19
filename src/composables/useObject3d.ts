import type { MaybeRef } from '@vueuse/core'
import type { Object3D } from 'three'

export interface UseObject3dOptions {
  positionX?: MaybeRef<number>
  positionY?: MaybeRef<number>
  positionZ?: MaybeRef<number>
  rotationX?: MaybeRef<number>
  rotationY?: MaybeRef<number>
  rotationZ?: MaybeRef<number>
}

export function useObject3d(obj: Object3D, options: any) {
  watchEffect(() => {
    obj.position.set(unref(options.positionX), unref(options.positionY), unref(options.positionZ))
    obj.rotation.set(unref(options.rotationX), unref(options.rotationY), unref(options.rotationZ))
  })
}
