export const specialCharacterValidator = (val = ''): boolean => {
    if (val) {
      //FIXME: change to ASCII Range
      if (!/^[|@₹#$%^&+*!=() ?0-9]*$/.test(val)) {
        return true;
      } else return false;
    } else return true;
  };
  
  export const notMoreThan10AnyNonAlphabeticalCharacter = (value = '') => {
    var matches = value.match(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g) || '';
    return matches.length < 10;
  };
  
  export const checkForAlphabets = (value = '') => {
    var matches = value.match(/[a-zA-Z]/g) || '';
    return matches.length > 0;
  };
  
  export const duplicateArrayCheck = (val: any) => {
    var result = val.reduce((unique: any[], o: { address: any }) => {
      if (!unique.some((obj: { address: any }) => obj.address === o.address)) {
        unique.push(o);
      }
      return unique;
    }, []);
    if (result.length == val.length) {
      return true;
    } else {
      return false;
    }
  };
  
  export const validatePhoneNumber = value => {
    if (value) {
      return isValidNumber(value, getISO2fromNumber(value));
    } else return true; //meaning not required field
  };
  
  export const requiredTest = value => {
    if (value) {
      return true;
    } else return false;
  };