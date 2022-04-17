<script lang="ts" setup>
import type { PerspectiveCamera, Scene } from 'three'
import { WebGLRenderer } from 'three'

import type { PropType } from 'vue'

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
const renderer = ref<WebGLRenderer>()

onMounted(() => {
  // create renderer
  renderer.value = new WebGLRenderer({
    canvas: canvas.value,
  })
})

// reactive size
watchEffect(() => {
  renderer.value?.setSize(props.width, props.height)
})

useRafFn(() => {
  if (!props.scene)
    console.warn('scene is not defined')
  else if (!props.camera)
    console.warn('camera is not defined')
  else
    renderer.value?.render(props.scene, props.camera)
})

defineExpose({
  canvas,
  renderer,
})
</script>

<template>
  <canvas ref="canvas" />
</template>
