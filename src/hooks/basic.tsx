import React from 'react';
import {
    useQuery,
    UseQueryResult,
    QueryObserverLoadingErrorResult,
} from '@tanstack/react-query';
import Utils from '../utils';

export default (
    key: string,
    url: string
): {
    data: any,
    error: any,
    isLoading: boolean,
    isFetching: boolean,
} => {
    const {
        data,
        error,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            return await Utils.secureFetch(url);
        },
    }) as {
        data: UseQueryResult<unknown, unknown>,
        error: QueryObserverLoadingErrorResult<unknown, unknown>,
        isLoading: boolean,
        isFetching: boolean,
    }; // the useQuery hook returns an object that contains more properties so
    // let's use the destructuring assignment feature of TypeScript to extract
    // the specific properties from the object returned by the useQuery hook

    return {
        data,
        error,
        isLoading,
        isFetching,
    }
};
