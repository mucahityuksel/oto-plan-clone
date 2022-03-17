export interface SagaActionParams<Type> {
    payload: ApiCallback<Type>;
    url?:string
}

export interface SagaGenericParams<Type> {
    type: string;
    payload: ApiCallback<Type>;
    url?:string
}

export interface ApiCallback<PayloadType = never> extends actionSuccess<PayloadType>, actionError { }

export interface actionSuccess<PayloadType = never> {
    onSuccess: (message: string, payload: PayloadType) => void
}

export interface actionError {
    onError: (message: string) => void
}
