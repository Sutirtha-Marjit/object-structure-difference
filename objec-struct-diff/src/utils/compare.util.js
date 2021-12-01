const CompareUtil = {

    COMP: {
        STANDARD: 'standard',
        TO_COMPARE: 'tocompare'
    },

    beautifiedJSON(object) {
        return JSON.stringify(object, undefined, 4);
    },

    compare(compObject) {
        const missing = {};
        const extra = {};
        const sObj = compObject[CompareUtil.COMP.STANDARD];
        const cObj = compObject[CompareUtil.COMP.TO_COMPARE];
        console.log({ sObj, cObj });
        if (sObj && cObj) {
            for (let key in sObj) {

                if (typeof cObj[key] === 'undefined') {
                    missing[key] = sObj[key];
                }
            }

            for (let key in cObj) {

                if (typeof sObj[key] === 'undefined') {
                    extra[key] = cObj[key];
                }
            }


        }

        return { missing, extra, perfect: (Object.keys(missing).length === 0 && Object.keys(extra).length === 0) };
    }


};


export default CompareUtil;