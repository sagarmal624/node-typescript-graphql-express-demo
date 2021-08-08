
const { errorType } = require('../constant')

const getErrorCode = err => {
  var errorName = err.extensions['code'];
  if(errorType[errorName]){
      let obj = errorType[errorName]
      obj.errorName = errorName
      return obj
  }
  let obj = errorType['INTERNAL_SERVER_ERROR']
  obj.errorName = errorName
  return errorType['INTERNAL_SERVER_ERROR']
}

module.exports = getErrorCode;
