/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let outObj = {};
    Object.assign(outObj, obj);
    for(let itm in fields) {
        if(obj[fields[itm]]) {
            delete outObj[fields[itm]]
        }
    }
    return outObj;
};
