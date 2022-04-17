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

const materialParameters = ref({
  color: 0x00FF00,
})

function toggleColor() {
  materialParameters.value.color = materialParameters.value.color === 0x00FF00 ? 0xFF0000 : 0x00FF00
}

useIntervalFn(toggleColor, 1000)

const boxHeight = ref(1)
</script>

<template>
  <div @click="boxHeight++">
    <WebGLRenderer :camera="cameraRef?.camera" :scene="sceneRef?.scene" :width="width" :height="height" />

    <Scene ref="sceneRef">
      <Mesh ref="meshRef">
        <BoxGeometry :width="1" :height="boxHeight" />
        <MeshBasicMaterial :pameters="materialParameters" />
      </Mesh>
    </Scene>

    <PerspectiveCamera ref="cameraRef" :fov="75" :aspect="width / height" :near="0.1" :far="1000" :position-z="5" />
  </div>
</template>
