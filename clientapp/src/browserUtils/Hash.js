import bcryptjs from "bcryptjs";
class Hash {
   async encrypt(text, salt) {
    const saltRounds = salt.length;
    const hashedPassword =  await bcryptjs.hash(text, saltRounds);
    return hashedPassword;
  }

   async decrypt(text,hash) {
       return await bcryptjs.compare(text,hash)
      }
}

const  hash = new Hash();

export default hash
