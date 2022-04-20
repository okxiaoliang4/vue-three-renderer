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

const rotationX = ref(0)
const rotationY = ref(0)

const scope = effectScope()
onMounted(() => {
  scope.run(() => {
    useRafFn(() => {
      rendererRef.value?.renderer?.render(sceneRef.value!.instance, cameraRef.value!.instance)
      if (meshRef.value) {
        rotationX.value += 0.01
        rotationY.value += 0.01
      }
    })
  })
})
onUnmounted(scope.stop)

</script>

<template>
  <WebGLRenderer
    ref="rendererRef"
    :camera="cameraRef?.instance"
    :scene="sceneRef?.instance"
    :width="width"
    :height="height"
  />

  <Scene ref="sceneRef">
    <Mesh ref="meshRef" :rotation-x="rotationX" :rotation-y="rotationY">
      <BoxGeometry
        :width="1"
        :height="1"
        :depth="1"
        :width-segments="1"
        :height-segments="1"
        :depth-segments="1"
      />
      <MeshBasicMaterial :parameters="materialParameters" />
    </Mesh>
    <AxesHelper />
  </Scene>

  <OrbitControls v-if="cameraRef?.instance" :camera="cameraRef.instance" :renderer="rendererRef?.renderer?.domElement" />

  <PerspectiveCamera ref="cameraRef" :fov="75" :aspect="width / height" :near="0.1" :far="1000" :position-z="5" />
</template>
