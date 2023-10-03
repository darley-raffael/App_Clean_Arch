import IUseCase from "../../shared/UseCase";
import IUser from "../model/User";
import IUserRepository from "./UserRepository";

export default class ConsultUserById implements IUseCase<string, IUser | null> {
  constructor(readonly repository: IUserRepository) {}
  execute(id: string): Promise<IUser | null> {
    return this.repository.findById(id);
  }
}
