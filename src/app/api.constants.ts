export class API {
  public static base: string =
  'https://smart-cargo.herokuapp.com';
   // "http://localhost:3000";


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

  public static updateDriverDetails(driverId){
    return `${API.base}/admin//update-driver/${driverId}`
  }

  public static deleteDriver(driverId){
    return `${API.base}/admin//delete-driver/${driverId}`
  }
  public static getListOfVehicles(){
    return `${API.base}/storekeeper/vehicles`;
  }

  public static updateVehicleDetails(vehicleId){
    return `${API.base}/admin//update-vehicle/${vehicleId}`
  }

  public static deleteVehicle(vehicleId){
    return `${API.base}/admin//delete-vehicle/${vehicleId}`
  }

  public static getListOfVehiclesTypes(){
    return `${API.base}/storekeeper/vehicle-types`;
  }

  public static updateVehicleDetailsType(vehicleTypeId){
    return `${API.base}/admin//update-vehicle-type/${vehicleTypeId}`
  }

  public static deleteVehicleType(vehicleTypeId){
    return `${API.base}/admin//delete-vehicle-type/${vehicleTypeId}`
  }

  public static getDriverSchedlueHistory(driverId){
    return `${API.base}/admin/driver-schedules/${driverId}`
  }

  public static getbulkOrder(statusId){
    return `${API.base}/storekeeper/orders/${statusId}`
  }

}
