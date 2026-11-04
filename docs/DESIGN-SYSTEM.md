# Crystal Bits — Visual Design System v1.0

**Theme:** Light mode only  
**Purpose:** Educational slides and Remotion motion-graphics videos  
**Visual direction:** Apple-inspired restraint, clarity, precision, generous whitespace, and purposeful motion. This is an independent Crystal Bits identity, not a reproduction of Apple's proprietary design assets.

## Brand principles
- Clarity: make complex technology understandable at a glance.
- Precision: technically accurate diagrams, labels, and alignment.
- Restraint: remove decoration that does not communicate information.
- Hierarchy: one dominant idea per composition.
- Continuity: consistent language across lessons and formats.
- Purposeful motion: animation communicates a relationship, process, or state change.

## Color
Use a predominantly neutral palette with Crystal Blue as the primary accent. Semantic colors are reserved for technical meaning.

| Role | Token | Value |
|---|---|---|
| Canvas | background.primary | #FFFFFF |
| Secondary surface | background.secondary | #F9FAFB |
| Tertiary surface | background.tertiary | #F2F3F5 |
| Primary text | text.primary | #202426 |
| Secondary text | text.secondary | #565D66 |
| Tertiary text | text.tertiary | #737982 |
| Subtle border | border.subtle | #E5E7EB |
| Default border | border.default | #D1D5DB |
| Brand accent | brand.primary | #2878F0 |

Semantic diagram colors: data `#2878F0`; processing `#7357D9`; storage `#0D9488`; hardware `#565D66`; software `#D97706`; warning `#DC8B28`; error `#DC4545`; success `#16845B`.

Color rules:
- Aim for 85–90% neutral colors in a typical composition.
- Never use color alone to communicate meaning; pair it with labels, shape, or position.
- Avoid rainbow diagrams and gradients as default backgrounds.
- Keep semantic color assignments consistent across a lesson.

## Typography
- Inter: display, headings, and body.
- IBM Plex Mono: code, values, identifiers, and technical metadata.

| Style | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Display | 104 px | 600 | 1.08 | -0.055em |
| Heading 1 | 80 px | 600 | 1.10 | -0.045em |
| Heading 2 | 64 px | 600 | 1.15 | -0.035em |
| Heading 3 | 48 px | 600 | 1.20 | -0.025em |
| Heading 4 | 36 px | 600 | 1.25 | -0.02em |
| Body large | 32 px | 400 | 1.40 | -0.01em |
| Body | 26 px | 400 | 1.45 | -0.01em |
| Body small | 22 px | 400 | 1.45 | -0.01em |
| Caption | 18 px | 400 | 1.40 | 0 |
| Eyebrow | 16 px | 500 | 1.40 | +0.08em |
| Code | 22 px | 400 | 1.50 | 0 |

Use sentence case. Avoid ultra-light weights and all-caps headings. Keep text readable at mobile playback size. Simplify or split content rather than shrinking text to fit.

## Spacing
4 px base unit; 8 px primary rhythm. Tokens: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 px.

Recommended relationships: eyebrow-to-title 16 px; title-to-subtitle 24 px; heading-to-body 16–24 px; description-to-main-visual 48 px; related diagram elements 16–24 px; content groups 32–48 px; major sections 64–96 px.

## Canvas and grid
| Format | Dimensions | Safe area |
|---|---|---|
| Landscape | 1920 × 1080 | 120 px horizontal, 80 px vertical |
| Portrait | 1080 × 1920 | 80 px sides, 160 px top, 220 px bottom |
| Square | 1080 × 1080 | Adapt to content |

Landscape grid: 12 columns, 24 px gutters, 120 px side margins. Keep essential content inside safe areas.

## Geometry and effects
Radius tokens: 0, 8, 12, 20, 28, and 9999 px. Use square geometry for technical architecture when appropriate; do not round every shape.

Borders: 1 px `#E5E7EB` subtle, 1 px `#D1D5DB` default, 1 px `#9CA3AF` strong.

Shadows: subtle `0 2px 8px rgba(32,36,38,0.04)`; medium `0 8px 24px rgba(32,36,38,0.07)`. No shadow by default.

## Technical visualization
- Rectangles: components, modules, or processes.
- Rounded rectangles: conceptual groups or services.
- Circles: nodes, states, or individual entities.
- Arrows: direction, dependency, or flow.
- Dashed lines: optional, indirect, or asynchronous relationships; explain when needed.
- Node padding 24 px; node radius 12 px; node border 2 px.
- Primary connectors 3 px; secondary connectors 2 px; arrowhead 10 px.
- Diagram labels 18–22 px; captions 16–18 px.
- Keep labels close to the objects they describe and avoid crossing connectors where possible.

## Motion
Motion is explanatory, not decorative. Use frame-driven Remotion animation (`useCurrentFrame`, `interpolate`, `spring`). Convert seconds to frames using composition FPS and keep renders deterministic.

Durations: instant 0.15 s; fast 0.25 s; normal 0.40 s; moderate 0.60 s; slow 0.90 s; dramatic 1.20 s.

Easing: linear `(0,0,1,1)`; ease-out `(0.16,1,0.3,1)`; ease-in `(0.7,0,0.84,0)`; ease-in-out `(0.65,0,0.35,1)`; emphasized `(0.2,0.8,0.2,1)`.

Spring presets: soft `{ mass: 1, stiffness: 90, damping: 18 }`; standard `{ mass: 1, stiffness: 120, damping: 20 }`; snappy `{ mass: 1, stiffness: 180, damping: 22 }`.

Presets: fade-up (0.40 s, opacity 0→1 and Y 24→0 px); scale-reveal (0.50 s, scale 0.94→1); draw-line (0.60 s, SVG path reveal); data-flow (0.80 s, indicator follows a path); morph-transform (0.90 s, transform one representation into another).

Avoid excessive bounce, elastic text, random floating elements, constant background movement, unnecessary zoom, and excessive parallax. Hard cuts are often preferable to transitions.

## Slide patterns
1. Opening: eyebrow, large title, optional one-line subtitle, restrained logo, generous whitespace.
2. Concept: one concept, one dominant visual, short explanation.
3. Architecture: structured nodes, semantic colors, clear flow, accurate labels.
4. Code: large readable code, IBM Plex Mono, selective highlighting.
5. Comparison: two or three aligned concepts with equivalent visual weight.
6. Summary: three to five concise takeaways.

General rules: one main idea per slide; no more than three major visual groups; progressive disclosure for complex explanations; do not shrink text to fit excessive content.

## Video presets
- YouTube landscape: 1920 × 1080 at 30 FPS.
- Landscape high-motion: 1920 × 1080 at 60 FPS.
- Shorts/Reels: 1080 × 1920 at 30 FPS.
- Vertical high-motion: 1080 × 1920 at 60 FPS.
- Square: 1080 × 1080 at 30 FPS.

Transitions: hard cut 0 frames; crossfade 12 frames; fade through white 15 frames; slide reveal 15 frames; mask reveal 18 frames. Use transitions only when they help the explanation.

## Governance
Use semantic tokens rather than arbitrary values. Reuse approved typography, spacing, geometry, and motion presets. Exceptions are allowed when they materially improve teaching clarity; document the reason. Light mode only.
