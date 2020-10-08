export interface newOrderDetails {
  _id:String,
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
  load:Number,
  volume:Number,
  email: String;
  phone: String;
  emergency_level: Number;
  status: String;
}
