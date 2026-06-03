type LoadingState = {
    __typename?: "LoadingState";
    id?: string;
    loadingStarted: Date;
    progress?: number;
};
export declare function isLoading(obj: any): obj is LoadingState;
export default LoadingState;
