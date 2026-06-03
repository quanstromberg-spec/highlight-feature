import { Meta, StoryFn } from '@storybook/react-vite';
import { ComponentProps } from 'react';
import { default as Component } from './Badge';
declare const _default: Meta<typeof Component>;
export default _default;
export declare const Badge: StoryFn<typeof Component>;
type BadgeVariations = {
    variant: Required<ComponentProps<typeof Component>["variant"]>[];
    size: Required<ComponentProps<typeof Component>["size"]>[];
};
export declare const AllVariants: StoryFn<BadgeVariations>;
