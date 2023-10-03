import Elysia from "elysia";
import ConsultUser from "../core/user/service/ConsultUser";


export default class UsersConsultControllers {
  constructor(readonly server: Elysia, readonly useCase: ConsultUser) {
    server.get("/users", async () => {
      return await this.useCase.execute();
    })
  }

}