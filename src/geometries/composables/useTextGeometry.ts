import type { MaybeRef } from '@vueuse/core'
import { BufferGeometry } from 'three'
import type { TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import type { Font } from 'three/examples/jsm/loaders/FontLoader'

export type UseTextGeometryOptions = Omit<{
  [k in keyof TextGeometryParameters]: MaybeRef<TextGeometryParameters[k]>
}, 'font'>

export function useTextGeometry(text: MaybeRef<string>, font: MaybeRef<Font>, options: UseTextGeometryOptions) {
  const instance = computed(() => {
    if (!unref(font)) { return new BufferGeometry() }
    else {
      return new TextGeometry(unref(text), {
        font: unref(font),
        size: unref(options.size),
        height: unref(options.height),
        curveSegments: unref(options.curveSegments),
        bevelEnabled: unref(options.bevelEnabled),
        bevelThickness: unref(options.bevelThickness),
        bevelSize: unref(options.bevelSize),
        bevelOffset: unref(options.bevelOffset),
        bevelSegments: unref(options.bevelSegments),
      })
    }
  })

  return { instance }
}
