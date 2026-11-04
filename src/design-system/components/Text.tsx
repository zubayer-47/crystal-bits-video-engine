import React, { type CSSProperties, type ReactNode } from "react";
import { colors, typography } from "../tokens";

type TextVariant = "display" | "h1" | "h2" | "h3" | "h4" | "bodyLarge" | "body" | "bodySmall" | "caption" | "eyebrow" | "code";
type TextTone = "primary" | "secondary" | "tertiary" | "inverse" | "brand";

export interface TextProps {
    children: ReactNode;
    variant?: TextVariant;
    as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4";
    tone?: TextTone;
    weight?: 400 | 500 | 600 | 700;
    align?: CSSProperties["textAlign"];
    maxWidth?: CSSProperties["maxWidth"];
    style?: CSSProperties;
}

const variantStyles: Record<TextVariant, CSSProperties> = {
    display: { fontSize: typography.size.display, lineHeight: typography.lineHeight.display, letterSpacing: `${typography.tracking.display}em`, fontWeight: 600 },
    h1: { fontSize: typography.size.h1, lineHeight: typography.lineHeight.heading1, letterSpacing: `${typography.tracking.h1}em`, fontWeight: 600 },
    h2: { fontSize: typography.size.h2, lineHeight: typography.lineHeight.heading2, letterSpacing: `${typography.tracking.h2}em`, fontWeight: 600 },
    h3: { fontSize: typography.size.h3, lineHeight: typography.lineHeight.heading3, letterSpacing: `${typography.tracking.h3}em`, fontWeight: 600 },
    h4: { fontSize: typography.size.h4, lineHeight: typography.lineHeight.heading4, letterSpacing: `${typography.tracking.h4}em`, fontWeight: 600 },
    bodyLarge: { fontSize: typography.size.bodyLarge, lineHeight: typography.lineHeight.bodyLarge, letterSpacing: `${typography.tracking.body}em`, fontWeight: 400 },
    body: { fontSize: typography.size.body, lineHeight: typography.lineHeight.body, letterSpacing: `${typography.tracking.body}em`, fontWeight: 400 },
    bodySmall: { fontSize: typography.size.bodySmall, lineHeight: typography.lineHeight.body, letterSpacing: `${typography.tracking.body}em`, fontWeight: 400 },
    caption: { fontSize: typography.size.caption, lineHeight: 1.4, fontWeight: 400 },
    eyebrow: { fontSize: typography.size.eyebrow, lineHeight: 1.4, letterSpacing: `${typography.tracking.eyebrow}em`, fontWeight: 500, textTransform: "uppercase" },
    code: { fontSize: typography.size.code, lineHeight: typography.lineHeight.code, fontWeight: 400 },
};

const tones: Record<TextTone, string> = {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    tertiary: colors.text.tertiary,
    inverse: colors.text.inverse,
    brand: colors.brand.primary,
};

export const Text: React.FC<TextProps> = ({ children, variant = "body", as = "div", tone = "primary", weight, align, maxWidth, style }) => {
    const Component = as;
    return <Component style={{ margin: 0, color: tones[tone], fontFamily: variant === "code" ? typography.fontFamily.mono : typography.fontFamily.body, ...variantStyles[variant], ...(weight ? { fontWeight: weight } : {}), textAlign: align, maxWidth, ...style }}>{children}</Component>;
};
