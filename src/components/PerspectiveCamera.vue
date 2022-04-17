<script lang="ts" setup>
import { PerspectiveCamera } from 'three'

const props = defineProps({
  fov: Number,
  aspect: Number,
  near: Number,
  far: Number,

  positionZ: Number,
})

const camera = new PerspectiveCamera(props.fov, props.aspect, props.near, props.far)

watchEffect(() => {
  camera.position.z = props.positionZ ?? camera.position.z
})

defineExpose({
  camera,
})
</script>

<template>
  <slot />
</template>
