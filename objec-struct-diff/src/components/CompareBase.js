import React from 'react';
import TextWrite from "./TextWrite";
import CompareUtil from '../utils/compare.util';
import ResultReport from './ResultReport';

const CompareBase = () => {

    const [result, setResult] = React.useState({});
    const [stdObj, setStdObj] = React.useState({});
    const [compObj, setCompObj] = React.useState({});


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

    React.useEffect(() => {
        setResult(CompareUtil.compare({ [CompareUtil.COMP.STANDARD]: stdObj, [CompareUtil.COMP.TO_COMPARE]: compObj }));
    }, [stdObj, compObj]);

    return (<div className="container-fluid">
        <br />
        <div className="row">
            <div className="col-md-12">
                <h3 style={{ paddingLeft: '10px' }} className="text-primary">Compare Object Structure</h3>
                <hr />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <TextWrite heading="Standard" onChange={(val) => { compareHandler(val, CompareUtil.COMP.STANDARD) }} />
            </div>
            <div className="col-md-6">
                <TextWrite heading="To Compare" onChange={(val) => { compareHandler(val, CompareUtil.COMP.TO_COMPARE) }} />
            </div>
        </div>
        <div className="row">
            <ResultReport result={result} />
        </div>
    </div>);
};

export default CompareBase;