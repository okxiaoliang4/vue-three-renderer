<script lang="ts" setup>
import { Scene } from 'three'
import { useBoxGeometry } from '~/composables/useBoxGeometry'
import { usePerspectiveCamera } from '~/composables/usePerspectiveCamera'
import { useMesh } from '~/composables/useMesh'
import { useWebGLRenderer } from '~/composables/useWebGLRenderer'
import { useMeshBasicMaterial } from '~/composables/useMeshBasicMaterial'
import { useAxesHelper } from '~/composables/useAxesHelper'

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

const { instance: camera } = usePerspectiveCamera({
  fov: 75,
  aspect: unref(width) / unref(height),
  near: 0.1,
  far: 1000,
  positionZ: 5,
})

const { scene } = useScene()

const geometry = useBoxGeometry({ width: 1, height: 1, depth: 1 })
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
