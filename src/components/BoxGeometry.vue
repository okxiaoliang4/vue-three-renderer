<script lang="ts" setup>
import { geometrySymbol } from './symbol'
import { useBoxGeometry } from '~/composables/useBoxGeometry'
import { useSyncInject } from '~/composables/useSyncInject'

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
useSyncInject(geometrySymbol, geometry)

defineExpose({
  geometry,
})
</script>

<template>
  <slot />
</template>
