import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default ({
    setPage,
    pagesCount,
    current
}: {
    setPage: (page: number) => void,
    pagesCount: number,
    current: number,
}): JSX.Element => {
    return (
        <Pagination className="justify-content-end">
            {(current !== 1) && <>
                <Pagination.First
                    onClick={() => {setPage(1)}}
                />
                <Pagination.Prev
                    onClick={() => {setPage(current - 1)}}
                />
            </>}
            {((current - 2) > 0) && <Pagination.Item
                onClick={() => {setPage(current - 2)}}
            >
                {current - 2}
            </Pagination.Item>}
            {((current - 1) > 0) && <Pagination.Item
                onClick={() => {setPage(current - 1)}}
            >
                {current - 1}
            </Pagination.Item>}
            <Pagination.Item active>
                {current}
            </Pagination.Item>
            {((current + 1) <= pagesCount) && <Pagination.Item
                onClick={() => {setPage(current + 1)}}
            >
                {current + 1}
            </Pagination.Item>}
            {((current + 2) <= pagesCount) && <Pagination.Item
                onClick={() => {setPage(current + 2)}}
            >
                {current + 2}
            </Pagination.Item>}
            {(current < pagesCount) && <>
                <Pagination.Next
                    onClick={() => {setPage(current + 1)}}
                />
                <Pagination.Last
                    onClick={() => {setPage(pagesCount)}}
                />
            </>}
        </Pagination>
    );
};
