import type { MaybeRef } from '@vueuse/core'
import type { Font } from 'three/examples/jsm/loaders/FontLoader'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import type { ShallowRef } from 'vue'

export interface UseFontReturn {
  instance: ShallowRef<Font>
}

export function useFont(source: MaybeRef<string>, type: MaybeRef<'url' | 'json'> = 'url'): UseFontReturn & PromiseLike<UseFontReturn> {
  const isFinished = ref(false)
  const isFetching = ref(false)
  const error = shallowRef<any>()
  const instance = shallowRef() as ShallowRef<Font>
  const loader = new FontLoader()

  const shell = {
    instance,
  }

  const loading = (isLoading: boolean) => {
    isFetching.value = isLoading
    isFinished.value = !isLoading
  }

  function waitUntilFinished() {
    return new Promise<UseFontReturn>((resolve, reject) => {
      until(isFinished).toBe(true)
        .then(() => resolve(shell))
        .catch(error => reject(error))
    })
  }

  async function exec() {
    try {
      loading(true)
      switch (unref(type)) {
        case 'url':
          instance.value = await loader.loadAsync(unref(source))
          break
        case 'json':
          instance.value = loader.parse(source)
          break
        default:
          throw new Error('Unknown type')
      }
      loading(false)
    }
    catch (e) {
      error.value = e
    }
  }

  watchEffect(() => {
    exec()
  })

  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilFinished()
        .then(onFulfilled, onRejected)
    },
  }
}
