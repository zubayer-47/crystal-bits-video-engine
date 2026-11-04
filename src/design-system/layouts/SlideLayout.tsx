import type { CSSProperties, ReactNode } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { colors } from '../tokens/colors';
import { SafeArea } from './SafeArea';

type SlideLayoutProps = {
    children: ReactNode;
    background?: string;
    safeArea?: boolean;
    style?: CSSProperties;
};

/** Standard Crystal Bits slide canvas. Designed for 16:9 by default. */
export const SlideLayout = ({
    children,
    background = colors.background.primary,
    safeArea = true,
    style,
}: SlideLayoutProps) => {
    const { width, height } = useVideoConfig();
    const content = safeArea ? <SafeArea>{children}</SafeArea> : children;

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
            {content}
        </AbsoluteFill>
    );
};
