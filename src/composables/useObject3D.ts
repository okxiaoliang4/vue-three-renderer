import type { MaybeRef } from '@vueuse/core'
import type { Object3D } from 'three'

export interface UseObject3DOptions {
  positionX?: MaybeRef<number>
  positionY?: MaybeRef<number>
  positionZ?: MaybeRef<number>

  rotationX?: MaybeRef<number>
  rotationY?: MaybeRef<number>
  rotationZ?: MaybeRef<number>

  scaleX?: MaybeRef<number>
  scaleY?: MaybeRef<number>
  scaleZ?: MaybeRef<number>

  castShadow?: MaybeRef<boolean>
  receiveShadow?: MaybeRef<boolean>

  name?: MaybeRef<string>
}

export function useObject3D(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  watchEffect(() => {
    const {
      positionX = 0,
      positionY = 0,
      positionZ = 0,
      rotationX = 0,
      rotationY = 0,
      rotationZ = 0,
      scaleX = 1,
      scaleY = 1,
      scaleZ = 1,
      castShadow = false,
      receiveShadow = false,
      name = '',
    } = options

    obj = unref(obj)

    obj.position.set(unref(positionX), unref(positionY), unref(positionZ))

    obj.rotation.set(unref(rotationX), unref(rotationY), unref(rotationZ))

    obj.scale.set(unref(scaleX), unref(scaleY), unref(scaleZ))

    obj.castShadow = unref(castShadow)
    obj.receiveShadow = unref(receiveShadow)
    obj.name = unref(name)
  })
}
