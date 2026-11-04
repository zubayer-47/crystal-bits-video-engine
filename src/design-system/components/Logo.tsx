import React, { type CSSProperties } from "react";
import { Img, staticFile } from "remotion";
import { colors, typography } from "../tokens";

export interface LogoProps {
    /** Path relative to public/, e.g. "logo/crystal-bits.svg". */
    src?: string;
    /** Show the text wordmark beside the supplied mark. */
    showWordmark?: boolean;
    wordmark?: string;
    markSize?: number;
    gap?: number;
    color?: string;
    style?: CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({ src, showWordmark = true, wordmark = "Crystal Bits", markSize = 48, gap = 12, color = colors.text.primary, style }) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap, color, fontFamily: typography.fontFamily.heading, fontWeight: 600, ...style }}>
        {src ? <Img src={staticFile(src)} alt="" style={{ width: markSize, height: markSize, objectFit: "contain" }} /> : null}
        {showWordmark && <span style={{ fontSize: markSize * 0.52, lineHeight: 1, letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>{wordmark}</span>}
    </div>
);

