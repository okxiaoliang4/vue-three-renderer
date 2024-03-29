import type { Scene } from 'three'
import { DirectionalLight } from 'three'
import { defineComponent } from 'vue'
import Light, { useLight } from './Light'
import { sceneSymbol } from '~/common/symbol'
import { useObject3D } from '~/objects/composables/useObject3D'

export default defineComponent({
  name: 'DirectionalLight',
  extends: Light,
  setup(props) {
    const instance = new DirectionalLight()
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
