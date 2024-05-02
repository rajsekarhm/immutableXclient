import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

 function createToken(userName,password){
    const $password =  bcrypt.hash(password,10);
    return  jwt.sign(
      {
        name: userName,
        pass: $password,
      },
      "shit",
      {
        expiresIn: "5h",
      }
    );
}


export  { createToken };
