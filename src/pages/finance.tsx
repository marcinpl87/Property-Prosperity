import React from 'react';
import PaginatedQuery from '../hooks/paginated';
import Table from '../components/table';

export default () => {
    const {
        isLoading,
        error,
        paginatedData,
        page,
        pagesCount,
        changePage,
    } = PaginatedQuery(
        'financeData',
        'finance'
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred</div>;
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Table
                        header={[
                            '#',
                            'Date',
                            'Sender',
                            'Receiver',
                        ]}
                        columns={[
                            'id',
                            'date',
                            'sender',
                            'receiver',
                        ]}
                        page={page}
                        data={paginatedData}
                        setPage={changePage}
                        pagesCount={pagesCount}
                    />
                </div>
            </div>
        </div>
    );
};
