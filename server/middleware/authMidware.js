import jwt from "jsonwebtoken";


//example
//click like button
//go thru auth middleware
//if all is good (NEXT) 
//then you can use like controller


//next happens after everything is done
const authMidware = async(req, res, next) => {
    try{
        //check to see if the user is who they claim to be
        
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; 

        let decodedData;

        //gets user id if its our own token
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, "test");
            req.userId = decodedData?.id;
        }
        else{
            //sub is googles way of id's
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error){
        console.log(error)
    }
}

export default authMidware;