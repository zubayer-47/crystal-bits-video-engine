import React, { type CSSProperties, type ReactNode } from "react";
import { colors, radius, spacing, typography } from "../tokens";

export interface LabelProps {
    children: ReactNode;
    tone?: "neutral" | "brand" | "success" | "warning" | "error";
    size?: "small" | "medium";
    outlined?: boolean;
    style?: CSSProperties;
}

const palette = {
    neutral: { color: colors.text.secondary, background: colors.background.tertiary, border: colors.border.subtle },
    brand: { color: colors.brand.primary, background: colors.brand.subtle, border: "#BFDBFE" },
    success: { color: colors.semantic.success, background: "#EAF6F0", border: "#B8E2CC" },
    warning: { color: colors.semantic.warning, background: "#FFF7E8", border: "#F2D7A5" },
    error: { color: colors.semantic.error, background: "#FFF0F0", border: "#F3C4C4" },
} as const;

export const Label: React.FC<LabelProps> = ({ children, tone = "neutral", size = "medium", outlined = false, style }) => {
    const selected = palette[tone];
    return <span style={{ display: "inline-flex", alignItems: "center", width: "fit-content", padding: `${size === "small" ? spacing[1] : spacing[2]}px ${spacing[3]}px`, borderRadius: radius.full, color: selected.color, background: outlined ? "transparent" : selected.background, border: `1px solid ${selected.border}`, fontFamily: typography.fontFamily.body, fontSize: size === "small" ? 14 : 16, lineHeight: 1.2, fontWeight: 500, whiteSpace: "nowrap", ...style }}>{children}</span>;
};
