import type { MeshBasicMaterialParameters } from 'three'
import type { PropType } from 'vue'
import { useMeshBasicMaterial } from './composables/useMeshBasicMaterial'
import { materialSymbol } from '~/common/symbol'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'MeshBasicMaterial',
  props: {
    parameters: Object as PropType<MeshBasicMaterialParameters>,
  },

  setup(props) {
    const material = useMeshBasicMaterial({ parameters: props.parameters })

    // sync material to parent
    useSyncInject(materialSymbol, material)

    return { material }
  },
  render: () => null,
})
