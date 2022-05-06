import type { Scene } from 'three'
import { Color, Light } from 'three'
import { defineComponent } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import Object3D from './Object3D'
import { sceneSymbol } from '~/common/symbol'
import { useObject3D } from '~/objects/composables/useObject3D'

export default defineComponent({
  name: 'Light',
  extends: Object3D,
  props: {
    color: {
      type: [String, Number],
      default: 0xFFFFFF,
    },
    intensity: { type: Number, default: 1 },
    shadowMapSizeWidth: { type: Number, default: 512 },
    shadowMapSizeHeight: { type: Number, default: 512 },
  },
  setup(props) {
    const instance = new Light()
    const parentScene = inject<Scene>(sceneSymbol)
    parentScene?.add(instance)

    useObject3D(instance, props)
    useLight(instance, props)

    return {
      instance,
    }
  },
  render() {
    return this.$slots.default?.()
  },
})

export interface UseLightOptions {
  color?: MaybeRef<string | number>
  intensity?: MaybeRef<number>
  shadowMapSizeWidth?: MaybeRef<number>
  shadowMapSizeHeight?: MaybeRef<number>
}

export function useLight(light: MaybeRef<Light>, options: UseLightOptions = {}) {
  watchEffect(() => {
    const {
      color = 0xFFFFFF,
      intensity = 1,
    } = options

    unref(light).color = new Color(unref(color))
    unref(light).intensity = unref(intensity)
  })

  watchEffect(() => {
    const {
      shadowMapSizeWidth = 512,
      shadowMapSizeHeight = 512,
    } = options

    unref(light).shadow.mapSize.width = unref(shadowMapSizeWidth)
    unref(light).shadow.mapSize.height = unref(shadowMapSizeHeight)
  })
}
