import type { BufferGeometry, Material, Scene } from 'three'
import { defineComponent } from 'vue'
import type { Ref } from 'vue'
import { geometrySymbol, materialSymbol, sceneSymbol } from './symbol'
import { useMesh } from '~/composables/useMesh'

export default defineComponent({
  setup() {
    const geometry = ref() as Ref<BufferGeometry>
    const materials = ref() as Ref<Material>

    const mesh = useMesh(geometry, materials)

    const parentScene = inject<Scene>(sceneSymbol)
    parentScene?.add(mesh)

    provide(geometrySymbol, geometry)
    provide(materialSymbol, materials)

    return {
      mesh,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
