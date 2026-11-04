export const typography = {
  fontFamily: {
    display: "Inter",
    heading: "Inter",
    body: "Inter",
    mono: "IBM Plex Mono",
  },
  size: {
    display: 104, h1: 80, h2: 64, h3: 48, h4: 36,
    bodyLarge: 32, body: 26, bodySmall: 22, caption: 18, eyebrow: 16, code: 22,
  },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  lineHeight: { display: 1.08, heading1: 1.1, heading2: 1.15, heading3: 1.2, heading4: 1.25, bodyLarge: 1.4, body: 1.45, code: 1.5 },
  tracking: { display: -0.055, h1: -0.045, h2: -0.035, h3: -0.025, h4: -0.02, body: -0.01, eyebrow: 0.08, code: 0 },
} as const;
