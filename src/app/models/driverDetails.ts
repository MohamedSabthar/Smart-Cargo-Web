export interface DriverDetails {
  name: {
    first: String;
    middle?: String;
    last: String;
  };
  contact: {
    email: String;
    phone: String;
  };
  address: {
    no: String;
    street: String;
    city: String;
  };
  license_no: String;
  allowed_vehicle: [{ type: String }];
  user_is_available: Boolean;
  _id: String;
  role: String;
}
