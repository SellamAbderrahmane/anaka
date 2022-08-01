import { TOKEN } from "../../utils"
import { AxiosClient, Status, ServerException } from "../axios.client"

export class UserRepository {
  http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async logIn({ email, password }: any): Promise<any> {
    try {
      const rep = await this.http.fetch({
        url: "/auth/sign-in",
        method: "POST",
        data: {
          email,
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
      const rep = await this.http.fetch(
        {
          url: "/auth/verify-user",
          method: "GET",
        },
        false
      )

      if (rep.status === Status.ERROR) {
        throw new ServerException(rep.message)
      }

      return rep
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async signUp(user: any): Promise<any> {
    try {
      const response = await this.http.fetch({
        url: "/auth/sign-up",
        method: "POST",
        data: user,
      })
      return response
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async subscribe(email: string) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }

  async contactSubscribe(data: any) {
    return new Promise((resolve, reject) => {
      console.log(data)

      resolve(true)
    })
  }
}

export default UserRepository
