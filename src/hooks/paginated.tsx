import { useState, useEffect } from 'react';
import {
    useQuery,
    UseQueryResult,
    QueryObserverLoadingErrorResult,
} from '@tanstack/react-query';
import Utils from '../utils';

const DEFAULT_PAGE_SIZE: number = 20;

export default (
    key: string,
    url: string
): {
    isLoading: boolean,
    error: QueryObserverLoadingErrorResult<unknown, unknown>,
    paginatedData: Array<any>,
    isFetching: boolean,
    page: number,
    pagesCount: number,
    changePage: (page: number) => void,
} => {
    const [page, setPage] = useState<number>(1);
    const [pagesCount, setPagesCount] = useState<number>(1);
    const [paginatedData, setPaginatedData] = useState<Array<any>>([]);

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

    const changePage = (page: number) => {
        setPage(page);
    };

    useEffect(
        () => {
            if (data && Object.values(
                data
            )[0]) {
                setPaginatedData(
                    Object.values(
                        data
                    )[0].slice(
                        (page - 1) * DEFAULT_PAGE_SIZE,
                        page * DEFAULT_PAGE_SIZE
                    )
                );
                setPagesCount(
                    Math.floor(
                        Object.values(
                            data
                        )[0].length / DEFAULT_PAGE_SIZE
                    )
                );
            }
        },
        [page, data]
    );

    return {
        isLoading,
        error,
        paginatedData,
        isFetching,
        page,
        pagesCount,
        changePage,
    }
};
