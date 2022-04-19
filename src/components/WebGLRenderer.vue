<script lang="ts" setup>
import type { PerspectiveCamera, Scene } from 'three'
import type { PropType } from 'vue'
import { useWebGLRenderer } from '~/composables/useWebGLRenderer'

const props = defineProps({
  camera: {
    type: Object as PropType<PerspectiveCamera>,
  },
  scene: {
    type: Object as PropType<Scene>,
  },
  width: {
    type: Number,
    default: window.innerWidth,
  },
  height: {
    type: Number,
    default: window.innerHeight,
  },
})

const canvas = ref()

const { renderer } = useWebGLRenderer(canvas, {
  width: props.width,
  height: props.height,
})

defineExpose({
  renderer,
})
</script>

<template>
  <canvas ref="canvas" />
</template>
