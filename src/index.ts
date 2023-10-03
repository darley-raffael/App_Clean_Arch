import { Elysia } from "elysia";
import { RegisterUser } from "./core/user/service/RegisterUser";
import UserRegisterController from "./adapters/UserRegisterController";
import UserRepositoryPrisma from "./external/prisma/repository/UserRepositoryPrisma";
import ConsultUser from "./core/user/service/ConsultUser";
import UsersConsultControllers from "./adapters/UsersConsultControllers";

const app = new Elysia();

// Register Router
const userRepository = new UserRepositoryPrisma();
const userRegister = new RegisterUser(userRepository);
new UserRegisterController(app, userRegister);

// Consult Router
const userConsult = new ConsultUser(userRepository);
new UsersConsultControllers(app, userConsult);

app.listen(3333, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
