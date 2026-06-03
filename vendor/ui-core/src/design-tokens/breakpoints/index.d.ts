export declare const allTokens: readonly ["Small", "Medium", "Large", "ExtraLarge"];
type tokenTuple = typeof allTokens;
export type Token = tokenTuple[number];
export declare const TokenAlias: Record<Token, string>;
export declare const TokenValue: Record<Token, number>;
export {};
