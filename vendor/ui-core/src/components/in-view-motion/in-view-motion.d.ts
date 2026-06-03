import { default as React } from 'react';
import { IIntersectionObserverOptions } from '../../hooks/ui/use-intersection-observer';
import { BoxProps } from '../box/Box';
import { MotionProps } from '../motion/motion';
interface InViewProps extends Omit<MotionProps, "in">, BoxProps {
    children: React.ReactNode;
    observerOptions?: IIntersectionObserverOptions;
}
declare const InView: ({ children, observerOptions, duration, animateOnlyOnce, animationToken, opacityStart, delay, ...boxProps }: InViewProps) => import("react/jsx-runtime").JSX.Element;
export default InView;
