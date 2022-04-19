import { PerspectiveCamera } from 'three'

export interface UsePerspectiveCameraOptions {
  fov?: number
  aspect?: number
  near?: number
  far?: number

  positionZ?: number
}

export function usePerspectiveCamera(props: UsePerspectiveCameraOptions) {
  const camera = new PerspectiveCamera(props.fov, props.aspect, props.near, props.far)

  watchEffect(() => {
    camera.position.z = props.positionZ ?? camera.position.z
  })

  return { camera }
}
