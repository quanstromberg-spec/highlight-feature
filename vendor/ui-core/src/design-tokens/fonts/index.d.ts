export declare const allTokens: readonly ["FontDefault", "FontBold"];
type tokenTuple = typeof allTokens;
export type Token = tokenTuple[number];
export declare const TokenAlias: Record<Token, string>;
export declare const TokenValue: Record<Token, string>;
export {};
