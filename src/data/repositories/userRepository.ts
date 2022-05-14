import { AxiosClient, Status, ServerException } from "../axios.client"

export class AuthRepository {
  http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async logIn({ username, password }: any): Promise<any> {
    try {
      const rep = await this.http.fetch({
        url: "/auth/sign-in",
        method: "POST",
        data: {
          email: username,
          password,
        },
      })

      if (rep.status === Status.ERROR) {
        throw Error(rep.message)
      }

      return rep
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async isAuthentecated() {
    try {
      const rep = await this.http.fetch({
        url: "/auth/verify_user",
        method: "GET",
      })

      if (rep.status === Status.ERROR) {
        throw new ServerException(rep.message)
      }

      return rep
    } catch (error) {
      throw new ServerException(error)
    }
  }

  signIn({ username, password }: any): any {
    return {
      username: "abderrahmane",
      email: "abderrahmane@test.com",
    }
  }
}

export default AuthRepository
