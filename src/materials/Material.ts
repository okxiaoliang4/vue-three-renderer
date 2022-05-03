import type { Blending, BlendingDstFactor, BlendingEquation, BlendingSrcFactor, DepthModes, PixelFormat, Plane, Side, StencilFunc, StencilOp } from 'three'
import { Material } from 'three'

import type { PropType } from 'vue'
import { useMaterial } from './composables/useMaterial'
import { materialSymbol } from '~/common/symbol'
import { useSyncInject } from '~/composables/useSyncInject'

export default defineComponent({
  name: 'Material',
  props: {
    alphaTest: Number,
    alphaToCoverage: Boolean,
    blendDst: {
      type: Object as PropType<BlendingDstFactor>,
    },
    blendDstAlpha: Number,
    blendEquation: {
      type: Object as PropType<BlendingEquation>,
    },
    blendEquationAlpha: Number,
    blending: {
      type: Object as PropType<Blending>,
    },
    blendSrc: {
      type: Object as PropType<BlendingSrcFactor | BlendingDstFactor>,
    },
    blendSrcAlpha: Number,
    clipIntersection: Boolean,
    clippingPlanes: {
      type: Array as PropType<Plane[]>,
    },
    clipShadows: Boolean,
    colorWrite: Boolean,
    defines: {} as PropType<any>,
    depthFunc: {
      type: Object as PropType<DepthModes>,
    },
    depthTest: Boolean,
    depthWrite: Boolean,
    fog: Boolean,
    name: String,
    opacity: Number,
    polygonOffset: Boolean,
    polygonOffsetFactor: Number,
    polygonOffsetUnits: Number,
    precision: {
      type: String as PropType<'highp' | 'mediump' | 'lowp'>,
    },
    premultipliedAlpha: Boolean,
    dithering: Boolean,
    side: {
      type: Object as PropType<Side>,
    },
    shadowSide: {
      type: Object as PropType<Side>,
    },
    toneMapped: Boolean,
    transparent: Boolean,
    vertexColors: Boolean,
    visible: Boolean,
    format: {
      type: Object as PropType<PixelFormat>,
    },
    stencilWrite: Boolean,
    stencilFunc: {
      type: Object as PropType<StencilFunc>,
    },
    stencilRef: Number,
    stencilWriteMask: Number,
    stencilFuncMask: Number,
    stencilFail: {
      type: Object as PropType<StencilOp>,
    },
    stencilZFail: {
      type: Object as PropType<StencilOp>,
    },
    stencilZPass: {
      type: Object as PropType<StencilOp>,
    },
    userData: {} as PropType<any>,
  },
  setup(props) {
    const instance = new Material()
    useMaterial(instance, props)

    // sync material to parent
    useSyncInject(materialSymbol, instance)

    return { instance }
  },
  render: () => null,
})
