import type { MaybeRef } from '@vueuse/core'
import type { Ref } from 'vue'

export function useSyncInject<T>(materialSymbol: Symbol, material: MaybeRef<T>) {
  const parentMaterialRef = inject<Ref<T | null>>(materialSymbol)
  watchEffect(() => {
    if (parentMaterialRef)
      parentMaterialRef.value = unref(material)
  })

  tryOnBeforeUnmount(() => {
    if (parentMaterialRef)
      parentMaterialRef.value = null
  })
}
