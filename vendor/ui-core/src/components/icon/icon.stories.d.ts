import { IconProps } from './Icon';
declare const _default: {
    title: string;
};
export default _default;
export declare const AllIcons: {
    render: (args: IconProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const Default: {
    render: (args: IconProps) => import("react/jsx-runtime").JSX.Element;
    name: string;
    parameters: {
        layout: string;
    };
    args: {
        iconId: string;
        color: string;
        disableRtlMirror: boolean;
        size: number;
    };
    argTypes: {
        iconId: {
            options: readonly ["angle-down", "angle-left", "angle-right", "angle-up", "angled-arrow-right", "arrow-down", "arrow-left", "arrow-right", "aspire", "back", "battery-charged", "battery", "box", "brushcutter", "calendar", "call", "cart-strike", "cart", "chainsaw", "chat", "check-filled", "check", "circle", "clipboard", "clock", "close", "cloud", "collapse", "commerce-dealer", "compare", "contact", "copy", "crown-dealer", "dealer", "deliver", "directions", "download", "earth", "ellipse-filled", "ellipse", "expand", "facebook", "filter", "flail-mower", "generic-link", "house", "husqvarna-logo-horizontal", "husqvarna-logo-text", "husqvarna-partner-truck", "image-missing-thick", "image-missing-thin", "info", "instagram", "installation", "like-filled", "like", "linkedin", "location", "mail", "maintenance", "menu-mirrored", "menu", "minus", "nera", "new-tab", "no-delivery", "pause", "pdf-large", "pdf", "pen", "petrol", "phone", "pin", "pinterest", "play-thumbnail", "play", "plus", "question", "quote", "redmax-logo", "retail", "return", "robotics-star", "robotics", "search", "secure", "share", "signin", "sort", "star-filled", "star", "swedish-royal-footer-logo", "tag", "target", "toolbox", "trash", "twitter", "whatsapp", "youtube", "zenoah-logo--black", "zenoah-logo--white", "zenoah-logo", "zero-turn"];
            description: string;
            type: {
                name: string;
                required: boolean;
            };
            control: {
                type: string;
            };
            table: {
                category: string;
                type: {
                    summary: string;
                };
            };
        };
        disableRtlMirror: {
            description: string;
            table: {
                category: string;
                type: {
                    summary: string;
                };
            };
        };
        color: {
            description: string;
            options: readonly ["Primary", "PrimaryDarker", "Secondary", "SecondaryDarker", "SuccessGreen", "ErrorRed", "CautionYellow", "Black", "White", "Grey100", "Grey200", "Grey300", "Grey400", "Grey500", "Grey600", "Grey800"];
            key: string;
            name: string;
            table: {
                category: string;
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            type: {
                name: string;
            };
            control: {
                type: string;
            };
            table: {
                category: string;
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
    };
};
