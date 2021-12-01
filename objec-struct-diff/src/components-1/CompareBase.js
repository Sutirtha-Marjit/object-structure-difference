import React from 'react';
import TextWrite from "./TextWrite";
import CompareUtil from '../utils/compare.util';
import ResultReport from './ResultReport';

const CompareBase = () => {

    const [result, setResult] = React.useState({});
    const [stdObj, setStdObj] = React.useState({});
    const [compObj, setCompObj] = React.useState({});
    const [editOff, setEditOff] = React.useState(false);

    const compareAction = () => {

        setResult(CompareUtil.compare({ [CompareUtil.COMP.STANDARD]: stdObj, [CompareUtil.COMP.TO_COMPARE]: compObj }));
    };

    const editStateChangeHandler = () => {

        setEditOff(!editOff);
    };

    const compareHandler = (val, flag) => {
        switch (flag) {
            case CompareUtil.COMP.STANDARD:
                setStdObj(val);
                break;

            case CompareUtil.COMP.TO_COMPARE:
                setCompObj(val);
                break;

            default:
        }
    };


    return (<div className="container-fluid">
        <br />
        <div className="row">
            <div className="col-lg-8">
                <h3 style={{ paddingLeft: '10px' }} className="text-primary">Compare Object Structure</h3>

            </div>
            <div className="col-lg-4">
                <div style={{ textAlign: 'right' }}>
                    <div style={{ width: '90px', display: 'inline-block', marginRight: '10px' }}>
                        <div className="form-check">
                            <input checked={!editOff} onChange={editStateChangeHandler} className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Editable</label>
                        </div>
                    </div>
                    <button className="btn btn-success btn-sm" onClick={compareAction}>Evalute</button>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-6">
                <TextWrite editOff={editOff} heading="Standard" onChange={(val) => { compareHandler(val, CompareUtil.COMP.STANDARD) }} />
            </div>
            <div className="col-md-6">
                <TextWrite editOff={editOff} heading="To Compare" onChange={(val) => { compareHandler(val, CompareUtil.COMP.TO_COMPARE) }} />
            </div>
        </div>
        <div className="row">
            <ResultReport result={result} />
        </div>
    </div>);
};

export default CompareBase;