import React, { type CSSProperties } from "react";
import { colors, radius, spacing, typography } from "../tokens";

export interface CodeBlockProps {
    code: string;
    language?: string;
    highlightedLines?: number[];
    showLineNumbers?: boolean;
    fontSize?: number;
    style?: CSSProperties;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, highlightedLines = [], showLineNumbers = true, fontSize = typography.size.code, style }) => {
    const lines = code.replace(/\n$/, "").split("\n");
    return (
        <div style={{ width: "100%", overflow: "hidden", background: colors.background.secondary, border: `1px solid ${colors.border.subtle}`, borderRadius: radius.lg, fontFamily: typography.fontFamily.mono, ...style }}>
            {language && <div style={{ padding: `${spacing[3]}px ${spacing[4]}px`, borderBottom: `1px solid ${colors.border.subtle}`, color: colors.text.tertiary, fontSize: 14, letterSpacing: "0.04em" }}>{language}</div>}
            <pre style={{ margin: 0, padding: spacing[4], overflow: "hidden", color: colors.text.primary, fontFamily: typography.fontFamily.mono, fontSize, lineHeight: 1.55, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                {lines.map((line, index) => <div key={index} style={{ display: "flex", minHeight: "1.55em", background: highlightedLines.includes(index + 1) ? colors.blue[50] : "transparent", margin: `0 -${spacing[4]}px`, padding: `0 ${spacing[4]}px` }}>
                    {showLineNumbers && <span aria-hidden="true" style={{ flex: "0 0 3.5em", paddingRight: spacing[3], color: colors.text.tertiary, opacity: 0.7, textAlign: "right", userSelect: "none" }}>{index + 1}</span>}
                    <span style={{ whiteSpace: "pre-wrap" }}>{line || " "}</span>
                </div>)}
            </pre>
        </div>
    );
};
