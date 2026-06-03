export declare const allTokens: readonly ["Heading1", "Heading2", "Heading3", "Heading4", "Subtitle1", "Subtitle2", "Introduction", "Body1", "Body1Bold", "Body1Medium", "Body2", "Body2Bold", "Body2Medium", "Microcopy", "MicrocopyBold", "MicrocopyMedium", "Label", "Button", "Link", "Microlabel"];
type tokenTuple = typeof allTokens;
export type Token = tokenTuple[number];
export declare const TokenAlias: Record<Token, string>;
export declare const TokenValue: Record<Token, string>;
export {};
