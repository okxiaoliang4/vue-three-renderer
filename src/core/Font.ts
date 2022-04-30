import type { PropType } from 'vue'
import { fontSymbol } from '../common/symbol'
import { useFont } from './composables/useFont'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'Font',
  props: {
    source: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'url' | 'json'>,
      default: 'url',
    },
  },
  setup(props) {
    const { instance } = useFont(props.source, props.type)

    // sync font to parent
    useSyncInject(fontSymbol, instance)

    return {
      instance,
    }
  },
  render: () => null,
})
