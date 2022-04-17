<script lang="ts" setup>
import type { Material, MeshBasicMaterialParameters } from 'three'
import type { PropType, Ref } from 'vue'
import { materialSymbol } from './symbol'
import { useMeshBasicMaterial } from '~/composables/useMeshBasicMaterial'

const props = defineProps({
  pameters: Object as PropType<MeshBasicMaterialParameters>,
})

const material = useMeshBasicMaterial(props)

const parentMaterialRef = inject<Ref<Material>>(materialSymbol)
if (parentMaterialRef)
  parentMaterialRef.value = material.value

defineExpose({
  material,
})
</script>

<template>
  <slot />
</template>
