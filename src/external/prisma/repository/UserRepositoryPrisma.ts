import { PrismaClient } from "@prisma/client";
import IUser from "../../../core/user/model/User";
import IUserRepository from "../../../core/user/service/UserRepository";

export default class UserRepositoryPrisma implements IUserRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  findById(id: string): Promise<IUser | null> {
    return this.prisma.users.findUnique({ where: { id } });
  }
  findAll(): Promise<IUser[]> {
    return this.prisma.users.findMany();
  }

  findByEmail(email: string): Promise<IUser | null> {
    return this.prisma.users.findUnique({ where: { email } });
  }
  create(user: IUser): Promise<IUser> {
    return this.prisma.users.create({ data: user });
  }
}
