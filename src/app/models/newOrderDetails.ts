export interface newOrderDetails {
  location: {
    lat: Number;
    lang: Number;
  };
  products: [
    {
      item: String;
      quantity: Number;
    }
  ];
  email: String;
  phone: String;
  emergency_level: Number;
  status: String;
}
