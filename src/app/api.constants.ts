export class API {
  public static base: string = 'https://smart-cargo.herokuapp.com'; //'http://localhost:3000';

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
    return `${API.base}/admin/update-driver/${driverId}`;
  }

  public static registerDriver() {
    return `${API.base}/admin/register-driver`;
  }

  public static deleteDriver(driverId) {
    return `${API.base}/admin/delete-driver/${driverId}`;
  }

  public static getNewOrders() {
    return `${API.base}/storekeeper/new-orders/`;
  }
  public static getListOfVehicles() {
    return `${API.base}/storekeeper/vehicles`;
  }

  public static updateVehicleDetails(vehicleId) {
    return `${API.base}/admin/update-vehicle/${vehicleId}`;
  }

  public static newVehicleDetails() {
    return `${API.base}/admin//register-vehicle`;
  }

  public static deleteVehicle(vehicleId) {
    return `${API.base}/admin/delete-vehicle/${vehicleId}`;
  }

  public static getListOfVehiclesTypes() {
    return `${API.base}/storekeeper/vehicle-types`;
  }

  public static getVehicleType(vehicleId) {
    return `${API.base}/storekeeper/vehicle-types/${vehicleId}`;
  }

  public static updateVehicleDetailsType(vehicleTypeId) {
    return `${API.base}/admin/update-vehicle-type/${vehicleTypeId}`;
  }

  public static deleteVehicleType(vehicleTypeId) {
    return `${API.base}/admin/delete-vehicle-type/${vehicleTypeId}`;
  }

  public static getDriverSchedlueHistory(driverId) {
    return `${API.base}/admin/driver-schedules/${driverId}`;
  }

  public static getbulkOrder(statusId) {
    return `${API.base}/storekeeper/orders/${statusId}`;
  }

  public static getScheduledOrders() {
    return `${API.base}/storekeeper/scheduled-orders`;
  }
  //orders based on urgency level
  public static getUrgencyOrders() {
    return `${API.base}/storekeeper/orders`;
  }

  public static getDepot() {
    return `${API.base}/storekeeper/depot`;
  }

  public static getClusteredStat() {
    return `${API.base}/storekeeper/clustered-statistics`;
  }
  public static updateDimension() {
    return `${API.base}/storekeeper/add-order-dimension`;
  }

  public static deleteStorekeeper(storekeeperId) {
    return `${API.base}/admin/delete-storekeeper/${storekeeperId}`;
  }

  public static updateStorekeeperDetails(storekeeperId) {
    return `${API.base}/admin/update-storekeeper/${storekeeperId}`;
  }

  public static registerStorekeeper() {
    return `${API.base}/admin/register-storekeeper`;
  }

  public static storekeeperScheduleHistory(storekeeperId) {
    return `${API.base}/admin/storekeeper-schedules/${storekeeperId}`;
  }

  public static getAvailableDrivers() {
    return `${API.base}/storekeeper/available-drivers`;
  }
  public static getProfile(userId) {
    return `${API.base}/storekeeper/settings/${userId}`;
  }

  public static updateProfile(userId) {
    return `${API.base}/storekeeper/settings/${userId}`;
  }

  public static updatePassword(userId) {
    return `${API.base}/storekeeper/password-change/${userId}`;
  }

  public static assignDriver() {
    return `${API.base}/storekeeper/assign-driver-to-cluster`;
  }

  public static generateRoute() {
    return `${API.base}/storekeeper/generate-route`;
  }
}
