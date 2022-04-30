import type { Font } from 'three/examples/jsm/loaders/FontLoader'
import type { Ref } from 'vue'
import { fontSymbol, geometrySymbol } from '../common/symbol'
import { useTextGeometry } from './composables/useTextGeometry'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'TextGeometry',
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 0,
    },
    curveSegments: Number,
    bevelEnabled: Boolean,
    bevelThickness: Number,
    bevelSize: Number,
    bevelOffset: Number,
    bevelSegments: Number,
  },
  setup(props) {
    const font = ref() as Ref<Font>

    const { instance } = useTextGeometry(props.text, font, props)

    provide(fontSymbol, font)

    // sync geometry to parent
    useSyncInject(geometrySymbol, instance)

    return {
      instance,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})
