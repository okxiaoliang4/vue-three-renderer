<script lang="ts" setup>
import type { MeshBasicMaterialParameters } from 'three'
import type { PropType } from 'vue'
import { materialSymbol } from './symbol'
import { useMeshBasicMaterial } from '~/composables/useMeshBasicMaterial'
import { useSyncInject } from '~/composables/useSyncInject'

const props = defineProps({
  pameters: Object as PropType<MeshBasicMaterialParameters>,
})

const material = useMeshBasicMaterial(props)

// sync material to parent
useSyncInject(materialSymbol, material)

defineExpose({
  material,
})
</script>

<template>
  <slot />
</template>
