import { default as IconName } from '../../base/icons';
import { Token as ColorToken } from '../../design-tokens/colors';
import { MarginProps } from '../../hooks/ui/use-spacing';
export type BadgeVariant = Extract<ColorToken, "Primary" | "SuccessGreen" | "Secondary" | "SecondaryDarker" | "ErrorRed" | "CautionYellow" | "Grey600" | "Grey500">;
export type BadgeSize = "small" | "large" | "micro";
export type BadgeProps = MarginProps & {
    /** The text of the badge */
    text?: string;
    /** If an icon should be prefixed the text. */
    iconId?: IconName;
    /** The type of badge (it's general color) */
    variant?: BadgeVariant;
    /** The size of the badge */
    size?: BadgeSize;
    /** Any additional css classes */
    className?: string;
    removeUpperCase?: boolean;
};
/** The badge can be used to convey small bits of information */
declare const Badge: import('react').ForwardRefExoticComponent<MarginProps & {
    /** The text of the badge */
    text?: string;
    /** If an icon should be prefixed the text. */
    iconId?: IconName;
    /** The type of badge (it's general color) */
    variant?: BadgeVariant;
    /** The size of the badge */
    size?: BadgeSize;
    /** Any additional css classes */
    className?: string;
    removeUpperCase?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export default Badge;
