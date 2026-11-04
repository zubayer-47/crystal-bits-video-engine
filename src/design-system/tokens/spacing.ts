export const spacing = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32,
  10: 40, 12: 48, 16: 64, 20: 80, 24: 96, 32: 128,
} as const;

export const canvas = {
  landscape: { width: 1920, height: 1080, marginX: 120, marginY: 80, columns: 12, gutter: 24 },
  portrait: { width: 1080, height: 1920, marginX: 80, marginTop: 160, marginBottom: 220 },
  square: { width: 1080, height: 1080 },
} as const;
