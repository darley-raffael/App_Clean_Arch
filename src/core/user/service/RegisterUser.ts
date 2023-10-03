import IUseCase from "../../shared/UseCase";
import IUserRepository from "./UserRepository";

type Entry = {
  name: string;
  email: string;
  password: string;
};
export class RegisterUser implements IUseCase<Entry, void> {
  constructor(private readonly repository: IUserRepository) { }
  async execute(data: Entry): Promise<void> {
    const { name, email, password } = data;

    const userExists = await this.repository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }

    await this.repository.create({
      name,
      email,
      password,
    });
  }
}
