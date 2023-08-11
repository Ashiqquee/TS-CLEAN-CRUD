import userModel, { UserInterface } from "../entities/user";

export const addUser = async (userData: UserInterface): Promise<UserInterface> => {
  const user = new userModel(userData);
  return await user.save();
};

export const findUserByEmail = async(email:string) : Promise<UserInterface | null> => {
  const user = await userModel.findOne({email});
  return user
};

export const findUserByPhone = async (phone: number): Promise<UserInterface | null> => {
  const user = await userModel.findOne({ phone });
  return user;
};
