import type { MaybeRef } from '@vueuse/core'
import type { OrthographicCamera } from 'three'
import type { UseCameraOptions } from './useCamera'
import { useCamera } from './useCamera'

export interface UseOrthographicCameraOptions extends UseCameraOptions {
  left?: MaybeRef<number>
  right?: MaybeRef<number>
  top?: MaybeRef<number>
  bottom?: MaybeRef<number>
  near?: MaybeRef<number>
  far?: MaybeRef<number>
}

export function useOrthographicCamera(camera: MaybeRef<OrthographicCamera>, props: UseOrthographicCameraOptions) {
  useCamera(camera, props)

  watchEffect(() => {
    const {
      left = 0,
      right = 0,
      top = 0,
      bottom = 0,
      near = 0,
      far = 0,
    } = props

    const _camera = unref(camera)
    _camera.left = unref(left)
    _camera.right = unref(right)
    _camera.top = unref(top)
    _camera.bottom = unref(bottom)
    _camera.near = unref(near)
    _camera.far = unref(far)
  })

  return { instance: camera }
}
