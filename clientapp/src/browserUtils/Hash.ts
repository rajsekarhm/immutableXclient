import bcryptjs from "bcryptjs";
class Hash {
   async encrypt(text: string, salt: string | any[]) {
    const saltRounds = salt.length;
    const hashedPassword =  await bcryptjs.hash(text, saltRounds);
    return hashedPassword;
  }

   async decrypt(text: string,hash: string) {
       return await bcryptjs.compare(text,hash)
      }
}

const  hash = new Hash();

export default hash
