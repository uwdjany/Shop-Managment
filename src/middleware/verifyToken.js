import 

export const verifyUserToken = (req, res, next) => {
  const token =
    req.header("auth-token") ||
    req.param["auth-token"] ||
    req.body.token ||
    req.query["auth-token"];
    if(!token){
        return Response.errorMessage(res, "No token provided!")

    }
};
