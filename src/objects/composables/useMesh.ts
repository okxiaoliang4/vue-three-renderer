import type { MaybeRef } from '@vueuse/core'
import type { BufferGeometry, Material } from 'three'
import { Mesh } from 'three'

export function useMesh(geometry: MaybeRef<BufferGeometry>, materials: MaybeRef<Material | Material[]>) {
  const mesh = new Mesh()

  watchEffect(() => {
    mesh.geometry = unref(geometry)
    mesh.material = unref(materials)
  })

  return mesh
}
