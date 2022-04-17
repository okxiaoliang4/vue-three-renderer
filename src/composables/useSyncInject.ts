import type { Ref } from 'vue'

export function useSyncInject<T>(materialSymbol: Symbol, ref: Ref<T>) {
  const parentMaterialRef = inject<Ref<T | null>>(materialSymbol)
  watchEffect(() => {
    if (parentMaterialRef)
      parentMaterialRef.value = ref.value
  })

  tryOnBeforeUnmount(() => {
    if (parentMaterialRef)
      parentMaterialRef.value = null
  })
}
