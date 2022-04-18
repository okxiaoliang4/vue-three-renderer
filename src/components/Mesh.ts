import type { BufferGeometry, Material, Scene } from 'three'
import { Mesh } from 'three'

import type { Ref } from 'vue'
import { geometrySymbol, materialSymbol, sceneSymbol } from './symbol'

export default defineComponent({
  setup(props, { expose, slots }) {
    const mesh = new Mesh()

    const geometry = ref() as Ref<BufferGeometry>
    const materials = ref() as Ref<Material>

    const parentScene = inject<Scene>(sceneSymbol)
    parentScene?.add(mesh)

    provide(geometrySymbol, geometry)
    provide(materialSymbol, materials)

    watchEffect(() => {
      mesh.geometry = geometry.value
      mesh.material = materials.value
    })

    expose({ mesh })

    return () => slots.default?.()
  },
})
