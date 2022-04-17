<script lang="ts" setup>
import type SceneVue from '~/components/Scene.vue'
import type PerspectiveCamera from '~/components/PerspectiveCamera.vue'
import type MeshVue from '~/components/Mesh.vue'

const width = window.innerWidth
const height = window.innerHeight

const sceneRef = ref<InstanceType<typeof SceneVue>>()
const cameraRef = ref<InstanceType<typeof PerspectiveCamera>>()
const meshRef = ref<InstanceType<typeof MeshVue>>()

useRafFn(() => {
  if (meshRef.value) {
    meshRef.value.mesh.rotation.x += 0.01
    meshRef.value.mesh.rotation.y += 0.01
  }
})

const color = ref(0x00FF00)

function toggleColor() {
  color.value = color.value === 0x00FF00 ? 0xFF0000 : 0x00FF00
}

useIntervalFn(toggleColor, 1000)
</script>

<template>
  <WebGLRenderer :camera="cameraRef?.camera" :scene="sceneRef?.scene" :width="width" :height="height" />

  <Scene ref="sceneRef">
    <Mesh ref="meshRef">
      <BoxGeometry />
      <MeshBasicMaterial :pameters="{ color }" />
    </Mesh>
  </Scene>

  <PerspectiveCamera ref="cameraRef" :fov="75" :aspect="width / height" :near="0.1" :far="1000" :position-z="5" />
</template>
