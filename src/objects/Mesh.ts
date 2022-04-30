import type { BufferGeometry, Material, Scene } from 'three'
import { defineComponent } from 'vue'
import type { Ref } from 'vue'
import Object3D from '../objects/Object3D'
import { geometrySymbol, materialSymbol, sceneSymbol } from '~/common/symbol'
import { useMesh } from '~/objects/composables/useMesh'
import { useObject3D } from '~/objects/composables/useObject3D'

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
