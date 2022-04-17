import { MeshBasicMaterial } from 'three'
import type { MeshBasicMaterialParameters } from 'three'
import type { Ref } from 'vue'
import { effect } from 'vue'

export interface UseMeshBasicMaterialOptions extends MeshBasicMaterialParameters {
}

export function useMeshBasicMaterial(props: any) {
  const material = ref(new MeshBasicMaterial(props.pameters)) as Ref<MeshBasicMaterial>

  effect(() => {
    material.value.setValues(props.pameters)
  })

  return material
}
