import { AxiosClient } from "../axios.client";

export class CartRepository {
  http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

}