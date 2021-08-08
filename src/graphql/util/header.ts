
function getHeaders(context) {
    return {
      "headers" : {
        "Accept-Language" : context.headers['accept-language']===undefined ? 'en' :context.headers['accept-language']
      }
    };
  }
  
module.exports.getHeaders=getHeaders;