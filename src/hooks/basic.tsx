import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Utils from '../utils';

export default (
    key: string,
    url: string
): {
    isLoading: boolean,
    error: any,
    data: any,
    isFetching: boolean,
} => {
    const {
        isLoading,
        error,
        data,
        isFetching,
    } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            return await Utils.secureFetch(url);
        },
    });
    return {
        isLoading,
        error,
        data,
        isFetching,
    }
};
