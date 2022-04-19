import { MeshBasicMaterial } from 'three'
import type { MeshBasicMaterialParameters } from 'three'
import type { Ref } from 'vue'
import { effect } from 'vue'

export interface UseMeshBasicMaterialOptions {
  parameters?: MeshBasicMaterialParameters
}

export function useMeshBasicMaterial(options: UseMeshBasicMaterialOptions) {
  const material = shallowRef(new MeshBasicMaterial(options.parameters)) as Ref<MeshBasicMaterial>

  effect(() => {
    if (options.parameters)
      material.value.setValues(options.parameters)
  })

  return material
}
