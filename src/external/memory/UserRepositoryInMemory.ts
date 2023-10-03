import IUser from "../../core/user/model/User";
import IUserRepository from "../../core/user/service/UserRepository";

export default class UserRepositoryInMemory implements IUserRepository {
  private readonly users: IUser[] = [];

  async findById(id: string): Promise<IUser | null> {
    return this.users.find((user) => user.id === id) ?? null;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }
  async create(user: IUser): Promise<IUser> {
    const newUser = {
      id: crypto.randomUUID(),
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    return this.users;
  }
}
