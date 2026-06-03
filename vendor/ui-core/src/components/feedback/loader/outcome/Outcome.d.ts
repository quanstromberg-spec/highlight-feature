import { SizesProps } from '../../../../hooks/ui/use-size';
export type OutcomeLoaderProps = SizesProps & {
    className?: string;
    success?: boolean;
    error?: boolean;
};
declare const OutcomeLoader: ({ className, success, error, ...rest }: OutcomeLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default OutcomeLoader;
