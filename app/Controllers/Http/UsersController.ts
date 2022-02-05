import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public async index({ response }) {
    return response.json({
      hello: "world",
    });
  }

  public async create() {}

  public async store({ request, response }) {
    const { username, password } = request.only(["username", "password"]);

    response.json({
      username,
      password,
    });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
