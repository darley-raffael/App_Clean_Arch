import UserRepositoryPrisma from "./external/prisma/repository/UserRepositoryPrisma";
import UserConsultByIdController from "./adapters/UserConsultByIdController";
import UsersConsultControllers from "./adapters/UsersConsultControllers";
import UserRegisterController from "./adapters/UserRegisterController";
import ConsultUserById from "./core/user/service/ConsultUserById";
import { RegisterUser } from "./core/user/service/RegisterUser";
import ConsultUser from "./core/user/service/ConsultUser";
import { Elysia } from "elysia";

const app = new Elysia();

// Register Router
const userRepository = new UserRepositoryPrisma();
const userRegister = new RegisterUser(userRepository);
new UserRegisterController(app, userRegister);

// Consult Router
const userConsult = new ConsultUser(userRepository);
new UsersConsultControllers(app, userConsult);

// Consult By Id Router
const consultUserById = new ConsultUserById(userRepository);
new UserConsultByIdController(app, consultUserById);

app.listen(3333, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
