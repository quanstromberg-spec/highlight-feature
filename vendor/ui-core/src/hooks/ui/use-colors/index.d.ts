import { Token } from '../../../design-tokens/colors';
export type ColorTint = .04 | .08 | .24 | .4 | .8 | .9;
export type ForegroundColorProps = {
    /** Sets the foreground color to one of our design tokens */
    color?: Token;
    /** Sets the tint of the foreground */
    colorTint?: ColorTint;
};
export type BackgroundColorProps = {
    /** Sets the background color to one of our design tokens */
    backgroundColor?: Token;
    /** Sets the tint of the background */
    backgroundColorTint?: ColorTint;
};
export type ColorProps = ForegroundColorProps & BackgroundColorProps;
declare const useColors: (props: ColorProps) => {
    className: string;
    style: {
        [x: number]: ColorTint | undefined;
    };
};
export default useColors;
