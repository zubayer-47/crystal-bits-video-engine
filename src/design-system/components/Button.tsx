import React, { type CSSProperties, type ReactNode } from "react";
import { colors, radius, spacing, typography } from "../tokens";

/** A visual button treatment for rendered slides/videos; intentionally non-interactive. */
export interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "text";
    size?: "small" | "medium" | "large";
    style?: CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "medium", style }) => {
    const dimensions = {
        small: { padding: `${spacing[2]}px ${spacing[3]}px`, fontSize: 16 },
        medium: { padding: `${spacing[3]}px ${spacing[5]}px`, fontSize: 20 },
        large: { padding: `${spacing[4]}px ${spacing[6]}px`, fontSize: 24 },
    }[size];
    const appearance = {
        primary: { color: colors.text.inverse, background: colors.brand.primary, border: `1px solid ${colors.brand.primary}` },
        secondary: { color: colors.text.primary, background: colors.background.primary, border: `1px solid ${colors.border.default}` },
        text: { color: colors.brand.primary, background: "transparent", border: "1px solid transparent" },
    }[variant];
    return <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: radius.full, fontFamily: typography.fontFamily.body, fontSize: dimensions.fontSize, lineHeight: 1.2, fontWeight: 500, whiteSpace: "nowrap", ...dimensions, ...appearance, ...style }}>{children}</div>;
};
