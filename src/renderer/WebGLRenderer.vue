<script lang="ts" setup>
import type { PerspectiveCamera, Scene, ShadowMapType } from 'three'
import { Color, PCFSoftShadowMap } from 'three'
import type { PropType } from 'vue'
import { useWebGLRenderer } from './composables/useWebGLRenderer'

const props = defineProps({
  camera: {
    type: Object as PropType<PerspectiveCamera>,
  },
  scene: {
    type: Object as PropType<Scene>,
  },
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 300,
  },
  clearColor: {
    type: [Color, String, Number],
    default: 0xFFFFFF,
  },
  shadowMapEnabled: Boolean,
  shadowMapType: {
    type: Number as PropType<ShadowMapType>,
    default: PCFSoftShadowMap,
  },
})

const canvas = ref()

const { renderer } = useWebGLRenderer(canvas, reactive({
  width: props.width,
  height: props.height,
  clearColor: props.clearColor,
  shadowMapEnabled: props.shadowMapEnabled,
}))

defineExpose({
  renderer,
})
</script>

<template>
  <canvas ref="canvas" />
</template>
