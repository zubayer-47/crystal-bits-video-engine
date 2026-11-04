import React from "react";
import { colors, diagram } from "../tokens";

export interface ConnectorProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color?: string;
    width?: number;
    dashed?: boolean;
    arrow?: boolean;
    markerId?: string;
}

export const Connector: React.FC<ConnectorProps> = ({ x1, y1, x2, y2, color = colors.text.tertiary, width = diagram.primaryConnector, dashed = false, arrow = true, markerId = "crystal-connector-arrow" }) => (
    <svg aria-hidden="true" width="100%" height="100%" viewBox={`0 0 ${Math.max(x1, x2) + diagram.arrowhead} ${Math.max(y1, y2) + diagram.arrowhead}`} style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none" }}>
        <defs>
            <marker id={markerId} markerWidth={diagram.arrowhead} markerHeight={diagram.arrowhead} refX={diagram.arrowhead - 1} refY={diagram.arrowhead / 2} orient="auto" markerUnits="userSpaceOnUse">
                <path d={`M 0 0 L ${diagram.arrowhead} ${diagram.arrowhead / 2} L 0 ${diagram.arrowhead} z`} fill={color} />
            </marker>
        </defs>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dashed ? "8 8" : undefined} markerEnd={arrow ? `url(#${markerId})` : undefined} />
    </svg>
);