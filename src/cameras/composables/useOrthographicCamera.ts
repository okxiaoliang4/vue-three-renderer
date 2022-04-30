import type { MaybeRef } from '@vueuse/core'
import { OrthographicCamera } from 'three'
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

export function useOrthographicCamera(props: UseOrthographicCameraOptions) {
  const instance = new OrthographicCamera(unref(props.left), unref(props.right), unref(props.top), unref(props.bottom), unref(props.near), unref(props.far))

  useCamera(instance, props)

  return { instance }
}
