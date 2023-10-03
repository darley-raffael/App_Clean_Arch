import Elysia, { t } from "elysia";
import { RegisterUser } from "../core/user/service/RegisterUser";

export default class UserRegisterController {
  constructor(readonly server: Elysia, useCase: RegisterUser) {
    server.post(
      "/users",
      async ({ body }) => {
        const { name, email, password } = body;
        await useCase.execute({
          name,
          email,
          password,
        });

        return {
          status: 201,
          body: {
            message: "User created successfully",
          },
        };
      },
      {
        body: t.Object({
          name: t.String(),
          email: t.String(),
          password: t.String(),
        }),
      }
    );
  }
}
