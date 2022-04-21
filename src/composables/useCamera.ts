import type { MaybeRef } from '@vueuse/core'
import type { Camera } from 'three'
import type { UseObject3DOptions } from './useObject3D'
import { useObject3D } from './useObject3D'

export interface UseCameraOptions extends UseObject3DOptions {
}

export function useCamera(camera: MaybeRef<Camera>, options: UseCameraOptions = {}) {
  useObject3D(camera, options)
}