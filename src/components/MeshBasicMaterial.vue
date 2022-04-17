<script lang="ts" setup>
import type { Material, MeshBasicMaterialParameters } from 'three'
import { MeshBasicMaterial } from 'three'
import type { PropType, Ref } from 'vue'
import { materialSymbol } from './symbol'

const props = defineProps({
  pameters: Object as PropType<MeshBasicMaterialParameters>,
})

const material = new MeshBasicMaterial(props.pameters)

const parentMaterialRef = inject<Ref<Material>>(materialSymbol)
if (parentMaterialRef)
  parentMaterialRef.value = material

defineExpose({
  material,
})
</script>

<template>
  <slot />
</template>
