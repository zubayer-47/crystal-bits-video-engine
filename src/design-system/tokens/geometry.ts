export const radius = { none: 0, sm: 8, md: 12, lg: 20, xl: 28, full: 9999 } as const;

export const borders = {
  subtle: { width: 1, color: "#E5E7EB" },
  default: { width: 1, color: "#D1D5DB" },
  strong: { width: 1, color: "#9CA3AF" },
} as const;

export const diagram = {
  nodePadding: 24,
  nodeRadius: 12,
  nodeBorder: 2,
  secondaryBorder: 1,
  primaryConnector: 3,
  secondaryConnector: 2,
  arrowhead: 10,
  labelMin: 18,
  labelMax: 22,
  captionMin: 16,
  captionMax: 18,
} as const;
