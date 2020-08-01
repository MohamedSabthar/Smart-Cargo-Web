export interface Orders {
  _id: String;
  location: { lat: Number; lang: Number };
  products: [
    {
      _id: String;
      item: String;
      quantity: Number;
    }
  ];
  email: String;
  phone: String;
  emergency_level: Number; // an order can take high/medium/low emergacy_level (1,2,3)
  status: String; // store the order status (ready,pending,delivered,sheduled)

  //these data will get populated by store-keeper
  volume: Number;
  load: Number;
}
