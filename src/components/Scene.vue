<script lang="ts" setup>
import { Scene } from 'three'
import { sceneSymbol } from './symbol'

const scene = new Scene()
provide(sceneSymbol, scene)

defineExpose({ scene })
</script>

<template>
  <slot />
</template>
