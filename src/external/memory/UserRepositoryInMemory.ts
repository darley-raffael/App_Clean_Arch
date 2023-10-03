import User from "../../core/user/model/User";
import IUserRepository from "../../core/user/service/UserRepository";

export default class UserRepositoryInMemory implements IUserRepository {
  constructor(private readonly users: User[] = []) {}
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
