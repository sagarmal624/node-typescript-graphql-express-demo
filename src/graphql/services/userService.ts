var  axios  =require('axios');
var header= require('../util/header');
const baseUrl= 'http://localhost:9002';


var errorResponse={
  data: {
    status:{
      code : '1999',
      header: 'Server error',
      description : 'No Connectivity from server'
    }
  }
}


  var getUserDetails= async function getUserDetails(parent, args, context, info){
    const params={
      'email': args.user.email,
      'firstName' : args.user.firstName,
      'lastName' : args.user.lastName,
      'password' : args.user.password
    }
    try{
      const options = {
        "headers" : {
          "Accept-Language" : context.headers['accept-language']
        }
      };
      const reqPath=`${baseUrl}/Users/`;
      // log.info("calling api at path: "+ reqPath);
      let data=axios.post(reqPath,params,options).then((response) => {
        
        // log.info("response data:"+ JSON.stringify(response.data));
        return response;
      }, (error)=>{
        console.log(error.message);
        // log.info("error:"+ error.message);
        return error.response.data;
      });
      console.log("returning data:"+JSON.stringify(data));
        return data;
    }catch(err){
      console.log(err.message);

      // log.info("returning data: inside catch");
      return errorResponse;
    }
    
  }
    
module.exports.getUserDetails = getUserDetails;