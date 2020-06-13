export class API {
  public static base :string = "http://localhost:3000"

  public static login(){
    return `${API.base}/auth/sign-in`;
  }
}
