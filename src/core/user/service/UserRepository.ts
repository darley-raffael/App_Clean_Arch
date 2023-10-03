import IUser from "../model/User";

export default interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
}
