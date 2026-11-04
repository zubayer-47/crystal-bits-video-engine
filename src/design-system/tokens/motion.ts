export const motion = {
  duration: { instant: 0.15, fast: 0.25, normal: 0.4, moderate: 0.6, slow: 0.9, dramatic: 1.2 },
  easing: {
    linear: [0, 0, 1, 1],
    easeOut: [0.16, 1, 0.3, 1],
    easeIn: [0.7, 0, 0.84, 0],
    easeInOut: [0.65, 0, 0.35, 1],
    emphasized: [0.2, 0.8, 0.2, 1],
  },
  spring: {
    soft: { mass: 1, stiffness: 90, damping: 18 },
    standard: { mass: 1, stiffness: 120, damping: 20 },
    snappy: { mass: 1, stiffness: 180, damping: 22 },
  },
  transitionFrames: { crossfade: 12, fadeThroughWhite: 15, slideReveal: 15, maskReveal: 18 },
} as const;
