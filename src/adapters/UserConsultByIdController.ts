import Elysia from "elysia";
import ConsultUserById from "../core/user/service/ConsultUserById";


export default class UserConsultByIdController {
  constructor(readonly server: Elysia, readonly useCase: ConsultUserById) {
    server.get("/users/:id", async ({ params }) => {
      return useCase.execute(params.id);
    })
  }
}