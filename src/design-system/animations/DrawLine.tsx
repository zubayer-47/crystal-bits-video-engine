import type { CSSProperties } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { motion } from '../tokens/motion';

type DrawLineProps = {
    path: string;
    width?: number;
    color?: string;
    strokeWidth?: number;
    duration?: number;
    delay?: number;
    viewBox?: string;
    lineCap?: 'butt' | 'round' | 'square';
    style?: CSSProperties;
};

/** Draws an SVG path progressively. The viewBox must match the path coordinates. */
export const DrawLine = ({
    path,
    width = 600,
    color = '#2878F0',
    strokeWidth = 3,
    duration = motion.duration.moderate,
    delay = 0,
    viewBox = '0 0 600 200',
    lineCap = 'round',
    style,
}: DrawLineProps) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const start = Math.round(delay * fps);
    const end = start + Math.max(1, Math.round(duration * fps));
    const progress = interpolate(frame, [start, end], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: (value) => 1 - Math.pow(1 - value, 3),
    });

    return (
        <svg width={width} viewBox={viewBox} fill="none" style={{ overflow: 'visible', ...style }}>
            <path
                d={path}
                pathLength={1}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap={lineCap}
                strokeDasharray={1}
                strokeDashoffset={1 - progress}
            />
        </svg>
    );
};
