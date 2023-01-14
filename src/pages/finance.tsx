import React from 'react';
import BasicQuery from '../hooks/basic';

export default () => {
    const { isLoading, error, data, isFetching } = BasicQuery(
        'financeData',
        'finance'
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred</div>;
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {data.finance.map(
                        (
                            fin: object & {
                                value: number
                            },
                            i: number
                        ) => <div key={i}>
                            {fin.value}
                        </div>
                    )}
                    <div>{isFetching ? "Updating..." : ""}</div>
                </div>
            </div>
        </div>
    );
};
