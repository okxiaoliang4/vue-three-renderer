import type { MaybeRef } from '@vueuse/core'
import type { Object3D, Vector3 } from 'three'

export interface UseObject3DOptions {
  positionX?: MaybeRef<number>
  positionY?: MaybeRef<number>
  positionZ?: MaybeRef<number>

  rotationX?: MaybeRef<number>
  rotationY?: MaybeRef<number>
  rotationZ?: MaybeRef<number>

  lookAt?: MaybeRef<{
    x: number
    y: number
    z: number
  } | Vector3>

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
      lookAt,
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

    if (lookAt)
      obj.lookAt(unref(lookAt).x, unref(lookAt).y, unref(lookAt).z)

    obj.scale.set(unref(scaleX), unref(scaleY), unref(scaleZ))

    obj.castShadow = unref(castShadow)
    obj.receiveShadow = unref(receiveShadow)
    obj.name = unref(name)
  })
}
