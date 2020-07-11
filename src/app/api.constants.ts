export class API {
  public static base: string = 'https://smart-cargo.herokuapp.com';
   //"http://localhost:3000"

  public static login() {
    return `${API.base}/auth/sign-in`;
  }

  public static forgotPassword() {
    return `${API.base}/auth/forgot-password`;
  }

  public static resetPassowrd(token) {
    return `${API.base}/auth/reset-password/${token}`;
  }

  public static getListOfStorekeepers() {
    return `${API.base}/admin/storekeepers`;
  }

  public static getListOfDrivers() {
    return `${API.base}/storekeeper/drivers`;
  }
}
