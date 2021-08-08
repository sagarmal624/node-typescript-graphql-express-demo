exports.errorName = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    TIMEOUT:'TIMEOUT',
    BAD_USER_INPUT:'BAD_USER_INPUT',
    INTERNAL_SERVER_ERROR:'INTERNAL_SERVER_ERROR',
    UNAUTHENTICATED:'UNAUTHENTICATED',
    INVALID_DATA:'INVALID_DATA'
  }
  
  exports.errorType = {
    UNAUTHORIZED: {
      message: 'User is unauthorized to access the resources..',
      //statusCode: 401
    },
    UNAUTHENTICATED:{
      message: 'User is not authenticated...',
      //statusCode: 401
    },
    TIMEOUT:{
      message: 'Timeout : Connection refused...',
      //statusCode: 500
    },
    BAD_USER_INPUT:{
      message: 'Required fields are missing!!',
      //statusCode: 400
    },
    INTERNAL_SERVER_ERROR:{
      message: 'Internal server error',
      //statusCode: 500
    },
    INVALID_DATA:{
      message: 'Required feild are missing...',
      //statusCode: 400
    }
  }