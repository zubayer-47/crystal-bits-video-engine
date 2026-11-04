import type { CSSProperties } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { motion } from '../tokens/motion';

type Point = { x: number; y: number };
type DataFlowProps = {
    from: Point;
    to: Point;
    color?: string;
    size?: number;
    duration?: number;
    delay?: number;
    style?: CSSProperties;
};

/** Moves a data marker along a straight path between two canvas coordinates. */
export const DataFlow = ({
    from,
    to,
    color = '#2878F0',
    size = 12,
    duration = motion.duration.slow,
    delay = 0,
    style,
}: DataFlowProps) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const start = Math.round(delay * fps);
    const end = start + Math.max(1, Math.round(duration * fps));
    const progress = interpolate(frame, [start, end], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: (value) => value,
    });
    const x = from.x + (to.x - from.x) * progress;
    const y = from.y + (to.y - from.y) * progress;

    return (
        <div
            aria-hidden
            style={{
                position: 'absolute',
                left: x - size / 2,
                top: y - size / 2,
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: color,
                boxShadow: `0 0 0 ${Math.max(2, size * 0.35)}px ${color}20`,
                pointerEvents: 'none',
                ...style,
            }}
        />
    );
};
