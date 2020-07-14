export class API {
  public static base: string = 'http://localhost:3000';
  //'https://smart-cargo.herokuapp.com';

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

  public static updateDriverDetails(driverId) {
    return `${API.base}/admin//update-driver/${driverId}`;
  }

  public static registerDriver() {
    return `${API.base}/admin/register-driver`;
  }
}
