import type { MaybeRef } from '@vueuse/core'
import type { PerspectiveCamera } from 'three'
import type { UseCameraOptions } from './useCamera'
import { useCamera } from './useCamera'

export interface UsePerspectiveCameraOptions extends UseCameraOptions {
  fov?: MaybeRef<number>
  aspect?: MaybeRef<number>
  near?: MaybeRef<number>
  far?: MaybeRef<number>
}

export function usePerspectiveCamera(camera: MaybeRef<PerspectiveCamera>, props: UsePerspectiveCameraOptions) {
  useCamera(camera, props)

  watchEffect(() => {
    const {
      fov = 0,
      aspect = 0,
      near = 0,
      far = 0,
    } = props

    const _camera = unref(camera)
    _camera.fov = unref(fov)
    _camera.aspect = unref(aspect)
    _camera.near = unref(near)
    _camera.far = unref(far)
  })

  return { instance: camera }
}
