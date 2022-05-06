<script lang="ts" setup>
import fontPath from 'three/examples/fonts/helvetiker_regular.typeface.json?url'
import type SceneVue from '~/scenes/Scene'
import type PerspectiveCameraVue from '~/cameras/PerspectiveCamera'
import type WebGLRendererVue from '~/components/WebGLRenderer.vue'
import Font from '~/core/Font'

const width = window.innerWidth
const height = window.innerHeight

const rendererRef = ref<InstanceType<typeof WebGLRendererVue>>()
const sceneRef = ref<InstanceType<typeof SceneVue>>()
const cameraRef = ref<InstanceType<typeof PerspectiveCameraVue>>()

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
      rendererRef.value?.renderer?.render(sceneRef.value!.instance, cameraRef.value!.instance)
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
    :shadow-map-enabled="true"
    clear-color="#fff"
  />

  <Scene ref="sceneRef">
    <DirectionalLight
      :position-x="20"
      :position-y="20"
      :position-z="20"
      :intensity="1"
      :shadow-map-size-width="4096"
      :shadow-map-size-height="4096"
      color="#ffffff"
      cast-shadow
    />
    <Mesh
      :position-x="0.5"
      :position-y="0.5"
      :position-z="0.5"
      cast-shadow
      receive-shadow
    >
      <BoxGeometry
        :width="1"
        :height="1"
        :depth="1"
        :width-segments="1"
        :height-segments="1"
        :depth-segments="1"
      />
      <MeshStandardMaterial v-bind="materialParameters" />
    </Mesh>
    <Mesh
      :rotation-x="-0.5 * Math.PI"
      cast-shadow
      receive-shadow
    >
      <PlaneGeometry
        :width="100"
        :height="100"
        :width-segments="1"
        :height-segments="1"
      />
      <MeshStandardMaterial :color="0xEEEEEE" />
    </Mesh>
    <Mesh
      :position-x="3"
      :position-y="3"
      :position-z="3"
      cast-shadow
      receive-shadow
    >
      <TextGeometry text="1">
        <Font :source="fontPath" />
      </TextGeometry>

      <MeshStandardMaterial v-bind="materialParameters" />
    </Mesh>
    <AxesHelper />
  </Scene>

  <OrbitControls
    v-if="cameraRef?.instance"
    :camera="cameraRef.instance"
    :renderer="rendererRef?.renderer?.domElement"
  />

  <PerspectiveCamera
    ref="cameraRef"
    :fov="75"
    :aspect="width / height"
    :near="0.1"
    :far="1000"
    :position-z="5"
    :position-x="5"
    :position-y="5"
  />
</template>
