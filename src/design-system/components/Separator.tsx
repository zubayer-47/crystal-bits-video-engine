import React, { type CSSProperties } from "react";
import { colors, spacing } from "../tokens";

export interface SeparatorProps {
    orientation?: "horizontal" | "vertical";
    color?: string;
    thickness?: number;
    length?: number | string;
    inset?: number;
    style?: CSSProperties;
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = "horizontal", color = colors.border.subtle, thickness = 1, length = "100%", inset = 0, style }) => {
    const horizontal = orientation === "horizontal";
    return <div aria-hidden="true" style={{ flex: "none", width: horizontal ? length : thickness, height: horizontal ? thickness : length, margin: horizontal ? `${inset}px 0` : `0 ${inset}px`, background: color, ...style }} />;
};

export const SectionGap: React.FC<{ size?: keyof typeof spacing }> = ({ size = 6 }) => <div aria-hidden="true" style={{ height: spacing[size], flex: "none" }} />;
