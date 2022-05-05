import type { MaybeRef } from '@vueuse/core'
import type { Material, MaterialParameters } from 'three'
import type { ToMaybeRef } from '~/utils'

export type UseMaterialOptions = ToMaybeRef<MaterialParameters>

export function useMaterial(instance: MaybeRef<Material>, options: UseMaterialOptions) {
  watchEffect(() => {
    unref(instance).setValues(reactive(options))
  })
}
