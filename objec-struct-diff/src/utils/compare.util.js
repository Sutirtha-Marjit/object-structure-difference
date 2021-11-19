const CompareUtil = {

    COMP: {
        STANDARD: 'standard',
        TO_COMPARE: 'tocompare'
    },

    compare(compObject) {
        const missing = {};
        const extra = {};
        if (compObject[CompareUtil.COMP.STANDARD] && compObject[CompareUtil.COMP.TO_COMPARE]) {
            for (let key in compObject[CompareUtil.COMP.STANDARD]) {
                console.log('CompareUtil-COMP.STANDARD', key);
                if (!compObject[CompareUtil.COMP.TO_COMPARE][key]) {
                    missing[key] = compObject[CompareUtil.COMP.STANDARD][key];
                }
            }

            for (let key in compObject[CompareUtil.COMP.TO_COMPARE]) {
                console.log('CompareUtil-COMP.TO_COMPARE', key);
                if (!compObject[CompareUtil.COMP.STANDARD][key]) {
                    extra[key] = compObject[CompareUtil.COMP.TO_COMPARE][key];
                }
            }
        }

        return { missing, extra, perfect: (Object.keys(missing).length === 0 && Object.keys(extra).length === 0) };
    }


};


export default CompareUtil;