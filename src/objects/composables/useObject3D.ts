import type { MaybeRef } from '@vueuse/core'
import type { Object3D } from 'three'

export interface UseObject3DOptions {
  positionX?: MaybeRef<number>
  positionY?: MaybeRef<number>
  positionZ?: MaybeRef<number>

  rotationX?: MaybeRef<number>
  rotationY?: MaybeRef<number>
  rotationZ?: MaybeRef<number>

  lookAtX?: MaybeRef<number>
  lookAtY?: MaybeRef<number>
  lookAtZ?: MaybeRef<number>

  scaleX?: MaybeRef<number>
  scaleY?: MaybeRef<number>
  scaleZ?: MaybeRef<number>

  castShadow?: MaybeRef<boolean>
  receiveShadow?: MaybeRef<boolean>

  name?: MaybeRef<string>
}

export function useObject3D(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  usePosition(obj, options)

  useRotation(obj, options)

  useScale(obj, options)

  useLookAt(obj, options)

  const {
    castShadow = false,
    receiveShadow = false,
    name = '',
  } = options

  watchEffect(() => unref(obj).castShadow = unref(castShadow))
  watchEffect(() => unref(obj).receiveShadow = unref(receiveShadow))
  watchEffect(() => unref(obj).name = unref(name))
}

export function usePosition(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  watchEffect(() => {
    const {
      positionX = 0,
      positionY = 0,
      positionZ = 0,
    } = options

    unref(obj).position.set(unref(positionX), unref(positionY), unref(positionZ))
  })
}

export function useRotation(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  watchEffect(() => {
    const {
      rotationX = 0,
      rotationY = 0,
      rotationZ = 0,
    } = options

    unref(obj).rotation.set(unref(rotationX), unref(rotationY), unref(rotationZ))
  })
}

export function useScale(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  watchEffect(() => {
    const {
      scaleX = 1,
      scaleY = 1,
      scaleZ = 1,
    } = options

    unref(obj).scale.set(unref(scaleX), unref(scaleY), unref(scaleZ))
  })
}

export function useLookAt(obj: MaybeRef<Object3D>, options: UseObject3DOptions = {}) {
  watchEffect(() => {
    const {
      lookAtX = 0,
      lookAtY = 0,
      lookAtZ = 0,
    } = options

    unref(obj).lookAt(unref(lookAtX), unref(lookAtY), unref(lookAtZ))
  })
}