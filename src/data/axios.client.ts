import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"

export enum Status {
  SUCCESS = "Success",
  ERROR = "Error",
}

export type NotificationFunc = (
  type: "success" | "info" | "warning" | "error",
  title: string,
  message: string
) => void

export class AxiosClient {
  axiosInstance: AxiosInstance
  createNotification: NotificationFunc

  constructor(
    defaultConfig: AxiosRequestConfig,
    tokenkey: string,
    createNotification?: NotificationFunc
  ) {
    if (createNotification) {
      this.createNotification = createNotification
    } else {
      this.createNotification = (type, title, message) => {
        return message
      }
    }

    this.axiosInstance = axios.create(defaultConfig)
    this.init(tokenkey)
  }

  private init(tokenkey: string) {
    const accessToken = this.getToken(tokenkey)

    this.axiosInstance.interceptors.request.use(
      (req: any) => {
        req.headers["Authorization"] = `Bearer ${accessToken}`
        return req
      },
      (err: any) => Promise.reject(err)
    )
  }

  onError = (status: any, error?: any) => {
    if (status >= 500) {
      this.createNotification("error", "ORASS-ERROR", error)
    } else {
      if (typeof error === "string") {
        this.createNotification("warning", "ORASS-ERROR", error)
      } else if (error) {
        this.createNotification(error.typemess, error.titrmess, error.libemess)
      } else {
        this.createNotification("error", "ORASS-ERROR", "[0000] - An unexpected error occurred !!")
      }
    }
  }

  fetch = (p: AxiosRequestConfig): Promise<any> => {
    if (p.data instanceof FormData) {
      return this.postFormData(p.url, p.data)
    }

    return new Promise(async (resolve, reject) => {
      p.method = p.method || "post"
      p.data = p.data || {}
      try {
        const rep = await this.axiosInstance.request(p)
        if (rep.status >= 500) {
          this.onError(rep.status, "HTTP ERROR CODE: " + rep.status)
          reject("HTTP ERROR CODE: " + rep.status)
        } else {
          if (rep.data.status === Status.ERROR) {
            this.onError(rep.status, rep.data.message)
            reject(rep.data.message)
          } else {
            resolve(rep.data.data || rep.data || {})
          }
        }
      } catch (err) {
        const status = err.response?.status
        const message = err.response?.data?.message || err.response?.data
        this.onError(status, message)
        return reject(message)
      }
    })
  }

  private postFormData(url: any, data: FormData) {
    return new Promise(async (resolve, reject) => {
      await this.axiosInstance
        .post(url, data)
        .then((rep) => {
          if (rep.status >= 500) {
            this.onError("HTTP ERROR CODE: " + rep.status)
            reject("HTTP ERROR CODE: " + rep.status)
          } else {
            if (rep.data.status === Status.ERROR) {
              this.onError(rep.data.msg)
              reject(rep.data.msg)
            } else {
              resolve(rep.data.data || rep.data || {})
            }
          }
        })
        .catch((err: AxiosError) => {
          const status = err.response?.status
          if (err.response?.data?.msg) {
            this.onError(status, err.response.data.msg)
            return reject(err.response.data.msg)
          }
          if (typeof err.response?.data === "string") {
            this.onError(status, err.response.data)
            return reject(err.response.data)
          }

          this.onError(status, err.message)
          return reject(err.message)
        })
    })
  }

  private getToken(tokenkey: string) {
    return localStorage.getItem(tokenkey)
  }
}

export class ServerException implements Error {
  name: string
  message: string
  stack?: string | undefined

  constructor(message: any) {
    this.message = message
    this.name = "ServerError"
  }
}

// import { message, notification } from "antd"
// createNotification(
//   type: "success" | "info" | "warning" | "error",
//   title: string,
//   message: string
// ): void {
//   if (this.modal[type]) {
//     this.modal[type](title, message)
//   } else {
//     notification[type]({
//       message: title,
//       description: message,
//     })
//   }
// }

//   modal: {
//     info: Function
//     success: Function
//     error: Function
//     warning: Function
//   } = {
//     info: (title: string, msg: string) => {
//       message.info(msg)
//     },
//     success: (title: string, msg: string) => {
//       message.success(msg)
//     },
//     error: (title: string, msg: string) => {
//       message.error(msg)
//     },
//     warning: (title: string, msg: string) => {
//       message.warning(msg)
//     },
//   }
