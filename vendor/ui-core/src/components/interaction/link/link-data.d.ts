export type LinkData = {
    text?: string;
    href: string;
    target?: string;
    title?: string;
    rel?: string;
    kind?: LinkKind;
};
export type LinkKind = "external" | "internal" | "download" | "more" | "less" | "pdf";
export default LinkData;
