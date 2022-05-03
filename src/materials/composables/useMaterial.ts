import type { MaybeRef } from '@vueuse/core'
import type { Material, MaterialParameters } from 'three'

export interface UseMaterialOptions extends MaterialParameters {
}

export function useMaterial(instance: MaybeRef<Material>, options: MaybeRef<UseMaterialOptions>) {
  watchEffect(() => {
    unref(instance).setValues(unref(options))
  })
}
