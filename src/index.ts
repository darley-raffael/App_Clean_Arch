import { Elysia } from "elysia";
import { RegisterUser } from "./core/user/service/RegisterUser";
import UserRegisterController from "./adapters/UserRegisterController";
import UserRepositoryPrisma from "./external/prisma/repository/UserRepositoryPrisma";

const app = new Elysia()

// Register Router
const userRepository = new UserRepositoryPrisma()
const userRegister = new RegisterUser(userRepository)
new UserRegisterController(app, userRegister)

app.listen(3333, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
})

