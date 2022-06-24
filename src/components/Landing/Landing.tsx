import React from 'react';

import '../../styles/colors.scss';

const Landing = () => {
    return (
        <div>
            <h1>Brandon Bynum</h1>
            <div className="w-75 text-primary">
                Full stack engineer currently focused on modernizing legacy
                payroll systems and applications at{' '}
                <a href="https://www.aa.com">American Airlines</a> and building{' '}
                <a href="https://firehouseapp.dev">firehouse</a>.
            </div>
        </div>
    );
};

export default Landing;
