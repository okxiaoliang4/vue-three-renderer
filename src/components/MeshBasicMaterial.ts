import type { MeshBasicMaterialParameters } from 'three'
import type { PropType } from 'vue'
import { materialSymbol } from './symbol'
import { useMeshBasicMaterial } from '~/composables/useMeshBasicMaterial'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  props: {
    pameters: Object as PropType<MeshBasicMaterialParameters>,
  },

  setup(props, { expose }) {
    const material = useMeshBasicMaterial(props)

    // sync material to parent
    useSyncInject(materialSymbol, material)

    expose({ material })

    return () => null
  },
})
