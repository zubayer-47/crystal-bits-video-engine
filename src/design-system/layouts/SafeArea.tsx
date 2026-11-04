import type { CSSProperties, ReactNode } from 'react';
import { useVideoConfig } from 'remotion';
import { canvas } from '../tokens/spacing';

type SafeAreaProps = {
    children: ReactNode;
    showGuides?: boolean;
    style?: CSSProperties;
};

/** Positions content inside the brand's landscape or portrait safe area. */
export const SafeArea = ({ children, showGuides = false, style }: SafeAreaProps) => {
    const { width, height } = useVideoConfig();
    const isPortrait = height > width;
    const preset = isPortrait ? canvas.portrait : canvas.landscape;
    const insetTop = isPortrait ? canvas.portrait.marginTop : canvas.landscape.marginY;
    const insetBottom = isPortrait ? canvas.portrait.marginBottom : canvas.landscape.marginY;
    const insetX = preset.marginX;

    return (
        <div
            style={{
                position: 'absolute',
                left: insetX,
                right: insetX,
                top: insetTop,
                bottom: insetBottom,
                boxSizing: 'border-box',
                outline: showGuides ? '1px dashed rgba(40,120,240,0.45)' : undefined,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
