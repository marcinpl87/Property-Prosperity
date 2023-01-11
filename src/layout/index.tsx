import React from 'react';
import Sidebar from './sidebar'
import Content from './content'

export default () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <Sidebar />
                </div>
                <div className="col-sm-8 pt-15 pb-10 g-0">
                    <Content />
                </div>
            </div>
        </div>
    );
};
