type ConditonalWrapperProps = {
    children: React.ReactElement;
    condition: boolean;
    wrapper: (children: React.ReactElement) => JSX.Element;
};
declare const ConditonalWrapper: React.FunctionComponent<ConditonalWrapperProps>;
export default ConditonalWrapper;
