<script lang="ts" setup>
import type { BufferGeometry } from 'three'
import { BoxGeometry } from 'three'
import type { Ref } from 'vue'
import { geometrySymbol } from './symbol'

const props = defineProps({
  width: Number,
  height: Number,
  depth: Number,
  widthSegments: Number,
  heightSegments: Number,
  depthSegments: Number,
})

const geometry = new BoxGeometry(props.width, props.height, props.depth, props.widthSegments, props.heightSegments, props.depthSegments)

const parentGeometryRef = inject<Ref<BufferGeometry>>(geometrySymbol)
if (parentGeometryRef)
  parentGeometryRef.value = geometry

defineExpose({
  geometry,
})
</script>

<template>
  <slot />
</template>
