const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function createToken(userName,password){
    const $password = await bcrypt.hash(password,10);
    return jwt.sign(
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


module.exports =  { createToken };
