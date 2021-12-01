import React from 'react';

function ResultReport(props) {
    const { missing, extra } = props.result;
    const resultVal = JSON.stringify({ missing, extra }, undefined, 4);

    return <div className="row" style={{ padding: '0px 10px 0px 10px' }}>
        <div className="col-md-12"><h5>Report</h5></div>
        <div className="col-md-6">
            <code>
                <pre>
                    {resultVal}
                </pre>
            </code>
        </div>
        <div className="col-md-6">
            {props.result.perfect && <span className="tick"></span>}
            {!props.result.perfect && <span className="danger"></span>}
        </div>
    </div>

}

export default ResultReport;