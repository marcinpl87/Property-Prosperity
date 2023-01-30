import React from 'react';
import Example from '../layout/example';

export default () => {
    return (
        <div className="container" data-testid="page-home-container">
            <div className="row">
                <div className="col-lg">
                    <Example />
                </div>
                <div className="col-lg">
                    <Example />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Example />
                </div>
            </div>
        </div>
    );
};
