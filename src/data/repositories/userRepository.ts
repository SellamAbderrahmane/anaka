import { AxiosClient, Status, ServerException } from "../axios.client"

export class UserRepository {
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
      return true;
      throw new ServerException('error')
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

  signUp(user: any): any {
    return {
      username: "abderrahmane",
      email: "abderrahmane@test.com",
    }
  }

  async subscribe(email: string) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }

  async contactSubscribe(data: any) {
    return new Promise((resolve, reject) => {
      console.log(data);
      
      resolve(true)
    })
  }
}

export default UserRepository
