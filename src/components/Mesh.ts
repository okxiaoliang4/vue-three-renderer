import type { BufferGeometry, Material, Scene } from 'three'
import { defineComponent } from 'vue'
import type { Ref } from 'vue'
import { geometrySymbol, materialSymbol, sceneSymbol } from './symbol'
import { useMesh } from '~/composables/useMesh'
import { useObject3d } from '~/composables/useObject3d'

export default defineComponent({
  props: {
    positionX: {
      type: Number,
      default: 0,
    },
    positionY: {
      type: Number,
      default: 0,
    },
    positionZ: {
      type: Number,
      default: 0,
    },
    rotationX: {
      type: Number,
      default: 0,
    },
    rotationY: {
      type: Number,
      default: 0,
    },
    rotationZ: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const geometry = ref() as Ref<BufferGeometry>
    const materials = ref() as Ref<Material>

    const mesh = useMesh(geometry, materials)

    const parentScene = inject<Scene>(sceneSymbol)
    parentScene?.add(mesh)

    provide(geometrySymbol, geometry)
    provide(materialSymbol, materials)

    useObject3d(mesh, props)

    return {
      mesh,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
