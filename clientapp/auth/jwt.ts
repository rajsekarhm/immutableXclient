import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

 function createToken(userName,password){
    const lengthOfString = `${userName+password}`.length
    const $password =  bcrypt.hash(password,lengthOfString);
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
