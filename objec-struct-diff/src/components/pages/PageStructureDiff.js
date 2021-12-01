import React from 'react';
import JSONContainer from '../util-components/JSONContainer';

function PageStructureDiff(props) {

    return <div className="row">
        <div className="col-md-6">
            <JSONContainer></JSONContainer>
        </div>
        <div className="col-md-6">
            <JSONContainer></JSONContainer>
        </div>
    </div>
}

export default PageStructureDiff;