import React from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './pagination';

export default ({
    data,
    page,
    header,
    columns,
    setPage,
    pagesCount
}: {
    data: Array<any>,
    page: number,
    header: Array<any>,
    columns: Array<any>,
    setPage: (page: number) => void,
    pagesCount: number,
}): JSX.Element => {
    return (
        <>
            <Table striped hover responsive size="sm">
                <thead>
                    <tr>
                        {header.map((
                            col: string,
                            i: number
                        ) => <th key={i}>
                            {col}
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((
                        row: Array<any>,
                        i: number
                    ) => <tr key={i}>
                        {columns.map((
                            col: any,
                            j: number
                        ) => <td key={j}>
                            {row[col]}
                        </td>)}
                    </tr>)}
                </tbody>
            </Table>
            {(pagesCount > 1) && <Pagination
                current={page}
                setPage={setPage}
                pagesCount={pagesCount}
            />}
        </>
    );
};
