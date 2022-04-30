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

const rotationX = ref(0)
const rotationY = ref(0)
const boxWidth = ref(1)
const textSize = ref(1)

const scope = effectScope()
onMounted(() => {
  scope.run(() => {
    useRafFn(() => {
      rendererRef.value?.renderer?.render(sceneRef.value!.instance, cameraRef.value!.instance)
      rotationX.value += 0.01
      rotationY.value += 0.01
      boxWidth.value += 0.01
      textSize.value += 0.01
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
    <Mesh
      :rotation-x="rotationX"
      :rotation-y="rotationY"
    >
      <BoxGeometry
        :width="boxWidth"
        :height="1"
        :depth="1"
        :width-segments="1"
        :height-segments="1"
        :depth-segments="1"
      />
      <MeshBasicMaterial :parameters="materialParameters" />
    </Mesh>
    <Mesh>
      <TextGeometry
        text="1"
        :size="textSize"
      >
        <Font :source="fontPath" />
      </TextGeometry>

      <MeshBasicMaterial :parameters="materialParameters" />
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
  />
</template>
