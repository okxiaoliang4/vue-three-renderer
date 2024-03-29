import { MeshBasicMaterial } from 'three'
import Material from './Material'
import { useMaterial } from './composables/useMaterial'
import { materialSymbol } from '~/common/symbol'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'MeshBasicMaterial',
  extends: Material,
  setup(props, { attrs }) {
    const instance = new MeshBasicMaterial()

    useMaterial(instance, attrs)

    // sync material to parent
    useSyncInject(materialSymbol, instance)

    return { instance }
  },
  render: () => null,
})
