<script lang="ts" setup>
import type { BufferGeometry } from 'three'
import type { Ref } from 'vue'
import { geometrySymbol } from './symbol'
import { useBoxGeometry } from '~/composables/useBoxGeometry'

const props = defineProps({
  width: Number,
  height: Number,
  depth: Number,
  widthSegments: Number,
  heightSegments: Number,
  depthSegments: Number,
})

const geometry = useBoxGeometry(props)

// sync geometry to parent
const parentGeometryRef = inject<Ref<BufferGeometry | null>>(geometrySymbol)
watchEffect(() => {
  if (parentGeometryRef)
    parentGeometryRef.value = geometry.value
})

defineExpose({
  geometry,
})
</script>

<template>
  <slot />
</template>
