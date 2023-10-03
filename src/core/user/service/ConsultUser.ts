import IUseCase from "../../shared/UseCase";
import IUser from "../model/User";
import IUserRepository from "./UserRepository";


export default class ConsultUser implements IUseCase<void, IUser[]>{
  constructor(readonly repository: IUserRepository) { }

  async execute(): Promise<IUser[]> {
    return await this.repository.findAll();
  }

}