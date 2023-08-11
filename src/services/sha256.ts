import sha256 from 'sha256';

export const securePassword = async (password : string) : Promise<string> => {
    const hashedPassword = sha256(password + "tscleanCrud");
    return hashedPassword;
}

export const verifyPassword = async (userInputPassword : string , storedHashedPassword : string) => {
    const hashedUserInput = sha256(userInputPassword);
    return hashedUserInput === storedHashedPassword; 
}