export class API {
  public static base :string = "https://smart-cargo.herokuapp.com"

  public static login(){
    return `${API.base}/auth/sign-in`;
  }
}
