export declare const allTokens: readonly ["Primary", "PrimaryDarker", "Secondary", "SecondaryDarker", "SuccessGreen", "ErrorRed", "CautionYellow", "Black", "White", "Grey100", "Grey200", "Grey300", "Grey400", "Grey500", "Grey600", "Grey800"];
type tokenTuple = typeof allTokens;
export type Token = tokenTuple[number];
export declare const TokenAlias: Record<Token, string>;
export declare const TokenValue: Record<Token, string>;
export {};
