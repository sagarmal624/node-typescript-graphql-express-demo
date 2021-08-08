const userService= require('../services/userService');

export default {
    Query: {
        getUsers : userService.getUserDetails,
   },
}