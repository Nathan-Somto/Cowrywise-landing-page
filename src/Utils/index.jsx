/**
 * @description takes a string and splits by . and returns first index as a number.
 * @param {string} str 
 * @returns number
 */
const getNumber = (str)=>{
    if(typeof str === 'string'){
        return +str.split('.')[0];
    }
    return NaN;
}

export {getNumber}