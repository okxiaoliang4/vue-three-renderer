<script lang="ts" setup>
import type SceneVue from '~/components/Scene.vue'
import type PerspectiveCamera from '~/components/PerspectiveCamera.vue'

const width = window.innerWidth
const height = window.innerHeight

const sceneRef = ref<InstanceType<typeof SceneVue>>()
const cameraRef = ref<InstanceType<typeof PerspectiveCamera>>()

</script>

<template>
  <WebGLRenderer :camera="cameraRef?.camera" :scene="sceneRef?.scene" :width="width" :height="height" />

  <Scene ref="sceneRef">
    <Mesh>
      <BoxGeometry />
      <MeshBasicMaterial :pameters="{ color: 0x00FF00 }" />
    </Mesh>
  </Scene>

  <PerspectiveCamera ref="cameraRef" :fov="75" :aspect="width / height" :near="0.1" :far="1000" :position-z="5" />
</template>
