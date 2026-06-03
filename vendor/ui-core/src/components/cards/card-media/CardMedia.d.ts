import { default as IconId } from '../../../base/icons';
import { BoxProps, PictureData } from '../../../components';
export type CardMediaProps = BoxProps & {
    alt?: string;
    image?: PictureData;
    iconId?: IconId;
};
/**
 * The `<CardMedia>` can be used for adding images in the cards.
 */
declare const CardMedia: ({ image, alt, iconId, color, mx, ...rest }: CardMediaProps) => import("react/jsx-runtime").JSX.Element;
export default CardMedia;
