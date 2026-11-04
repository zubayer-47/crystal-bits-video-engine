import type { CSSProperties, ReactNode } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { colors } from '../tokens/colors';
import { SafeArea } from './SafeArea';

type VideoLayoutProps = {
    children: ReactNode;
    background?: string;
    safeArea?: boolean;
    style?: CSSProperties;
};

/** Responsive canvas wrapper for landscape, portrait, and square compositions. */
export const VideoLayout = ({
    children,
    background = colors.background.primary,
    safeArea = true,
    style,
}: VideoLayoutProps) => {
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill
            style={{
                width,
                height,
                backgroundColor: background,
                color: colors.text.primary,
                fontFamily: 'Inter, Arial, sans-serif',
                overflow: 'hidden',
                ...style,
            }}
        >
            {safeArea ? <SafeArea>{children}</SafeArea> : children}
        </AbsoluteFill>
    );
};
