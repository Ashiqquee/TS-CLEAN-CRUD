import  {findUserByEmail,findUserByPhone,addUser} from '../../repositories/user';
import { UserInterface } from '../../entities/user';
import { securePassword } from '../../services/sha256';


export const createUser = async (
    userData : UserInterface
) => {
    try {
       const existingEmail = await findUserByEmail(userData.email);
       if (existingEmail) return "Email already exists in the database"; 

       const existingPhone = await findUserByPhone(userData.phone);
       if (existingPhone) return "Phone already exists in the database"; 

       const securedPassword = await securePassword(userData.password);
       userData.password = securedPassword;
       
       return await addUser(userData);


    } catch (error) {
       console.error("An error occurred:", error);
       return "An error occurred while creating the user";
    }
}