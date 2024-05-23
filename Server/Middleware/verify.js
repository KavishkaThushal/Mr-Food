import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
 const token=req.headers.authorization

 if(!token) return res.status(401).json({success:false,message:'Access denied'})

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.status(401).json({success:false,message:'Invalid token'})
        req.user=user.id
        next()
    })

}