export type AccordionContextProps = {
    isOpen?: boolean;
    onToggle?: () => void;
    variant?: "default" | "prominent";
};
declare const AccordionContext: import('react').Context<AccordionContextProps>;
export default AccordionContext;
