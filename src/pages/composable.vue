<script lang="ts" setup>
import { PerspectiveCamera, Scene } from 'three'
import { usePerspectiveCamera } from '~/cameras/composables'
import { useBoxGeometry } from '~/geometries/composables/useBoxGeometry'
import { useAxesHelper } from '~/helpers/composables/useAxesHelper'
import { useMeshBasicMaterial } from '~/materials/composables/useMeshBasicMaterial'
import { useMesh } from '~/objects/composables/useMesh'
import { useWebGLRenderer } from '~/renderer/composables/useWebGLRenderer'

const canvasEl = ref()
const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

const { renderer } = useWebGLRenderer(canvasEl, {
  width,
  height,
})

function useScene() {
  const scene = shallowRef(new Scene())
  return { scene }
}

const camera = new PerspectiveCamera()
usePerspectiveCamera(camera, {
  fov: 75,
  aspect: unref(width) / unref(height),
  near: 0.1,
  far: 1000,
  positionZ: 5,
})

const { scene } = useScene()

const { instance: geometry } = useBoxGeometry({ width: 1, height: 1, depth: 1 })
const material = useMeshBasicMaterial({ parameters: { color: 0x00FF00 } })

const cube = useMesh(geometry, material)

const { helper } = useAxesHelper(scene, { size: 20 })

scene.value.add(cube)
scene.value.add(helper.value)

useRafFn(() => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.value?.render(scene.value, camera)
})

</script>

<template>
  <canvas ref="canvasEl" />
</template>
