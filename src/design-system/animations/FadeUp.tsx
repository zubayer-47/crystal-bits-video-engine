import type { CSSProperties, ReactNode } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { motion } from '../tokens/motion';

type FadeUpProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
    style?: CSSProperties;
};

/** Frame-driven text/content entrance. Duration and delay are expressed in seconds. */
export const FadeUp = ({
    children,
    delay = 0,
    duration = motion.duration.normal,
    distance = 24,
    style,
}: FadeUpProps) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const start = Math.round(delay * fps);
    const length = Math.max(1, Math.round(duration * fps));
    const progress = interpolate(frame, [start, start + length], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: (value) => 1 - Math.pow(1 - value, 3),
    });

    return (
        <div
            style={{
                opacity: progress,
                transform: `translate3d(0, ${(1 - progress) * distance}px, 0)`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
