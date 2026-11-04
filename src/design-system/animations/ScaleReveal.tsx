import type { CSSProperties, ReactNode } from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { motion } from '../tokens/motion';

type ScaleRevealProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    fromScale?: number;
    useSpring?: boolean;
    style?: CSSProperties;
};

/** Subtle reveal for diagram nodes and visual groups. */
export const ScaleReveal = ({
    children,
    delay = 0,
    duration = motion.duration.moderate,
    fromScale = 0.94,
    useSpring = false,
    style,
}: ScaleRevealProps) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const delayFrames = Math.round(delay * fps);
    const durationFrames = Math.max(1, Math.round(duration * fps));
    const localFrame = Math.max(0, frame - delayFrames);

    const springProgress = spring({
        frame: localFrame,
        fps,
        config: motion.spring.standard,
        durationInFrames: durationFrames,
    });
    const linearProgress = interpolate(localFrame, [0, durationFrames], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    const progress = useSpring ? springProgress : linearProgress;
    const opacity = interpolate(localFrame, [0, Math.min(8, durationFrames)], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <div style={{ opacity, transform: `scale(${fromScale + (1 - fromScale) * progress})`, ...style }}>
            {children}
        </div>
    );
};
