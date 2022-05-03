import { LineBasicMaterial } from 'three'
import Material from './Material'
import { useMaterial } from './composables/useMaterial'
import { materialSymbol } from '~/common/symbol'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'LineBasicMaterial',
  extends: Material,
  setup(props, { attrs }) {
    const instance = new LineBasicMaterial()

    useMaterial(instance, attrs)

    // sync material to parent
    useSyncInject(materialSymbol, instance)

    return { instance }
  },
  render: () => null,
})
