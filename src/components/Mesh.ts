import type { BufferGeometry, Material, Scene } from 'three'
import { defineComponent } from 'vue'
import type { Ref } from 'vue'
import { geometrySymbol, materialSymbol, sceneSymbol } from './symbol'
import Object3D from './Object3D'
import { useMesh } from '~/composables/useMesh'
import { useObject3D } from '~/composables/useObject3D'

export default defineComponent({
  name: 'Mesh',
  extends: Object3D,
  setup(props) {
    const geometry = ref() as Ref<BufferGeometry>
    const materials = ref() as Ref<Material>

    const instance = useMesh(geometry, materials)

    const parentScene = inject<Scene>(sceneSymbol)
    parentScene?.add(instance)

    provide(geometrySymbol, geometry)
    provide(materialSymbol, materials)

    useObject3D(instance, props)

    return {
      instance,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
