<script lang="ts" setup>
import type SceneVue from '~/components/Scene'
import type PerspectiveCameraVue from '~/components/PerspectiveCamera'
import type MeshVue from '~/components/Mesh'
import type WebGLRendererVue from '~/components/WebGLRenderer.vue'

const width = window.innerWidth
const height = window.innerHeight

const rendererRef = ref<InstanceType<typeof WebGLRendererVue>>()
const sceneRef = ref<InstanceType<typeof SceneVue>>()
const cameraRef = ref<InstanceType<typeof PerspectiveCameraVue>>()
const meshRef = ref<InstanceType<typeof MeshVue>>()

const materialParameters = ref({
  color: 0x00FF00,
})

function toggleColor() {
  materialParameters.value.color = materialParameters.value.color === 0x56DD88 ? 0x66F325 : 0x56DD88
}

useIntervalFn(toggleColor, 1000)

const scope = effectScope()
onMounted(() => {
  scope.run(() => {
    useRafFn(() => {
      rendererRef.value?.renderer?.render(sceneRef.value!.scene, cameraRef.value!.camera)
      if (meshRef.value) {
        meshRef.value.mesh.rotation.x += 0.01
        meshRef.value.mesh.rotation.y += 0.01
      }
    })
  })
})
onUnmounted(scope.stop)

</script>

<template>
  <WebGLRenderer
    ref="rendererRef"
    :camera="cameraRef?.camera"
    :scene="sceneRef?.scene"
    :width="width"
    :height="height"
  />

  <Scene ref="sceneRef">
    <Mesh ref="meshRef">
      <BoxGeometry :width="1" :height="1" />
      <MeshBasicMaterial :parameters="materialParameters" />
    </Mesh>
  </Scene>

  <OrbitControls v-if="cameraRef?.camera" :camera="cameraRef.camera" :renderer="rendererRef?.renderer?.domElement" />

  <PerspectiveCamera ref="cameraRef" :fov="75" :aspect="width / height" :near="0.1" :far="1000" :position-z="5" />
</template>
