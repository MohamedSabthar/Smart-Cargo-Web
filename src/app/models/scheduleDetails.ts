import { Orders } from './orderDetails';
import { DriverDetails } from './driverDetails';

export interface ScheduleDetails {
  _id: String;
  orders: Orders[];
  driver: DriverDetails;
  vehicle: VehicleDetails;
  date: Date;
}

interface VehicleDetails {
  vehicle_type: VehicleType;
  license_plate: String;
  is_available: Boolean;
  on_repair: Boolean;
  load: Number,
  fuel_economy: Number,
  capacity: Number,
  _id: String
}

interface VehicleType{
  type: String , //ex: lorry / three-wheel
  // store the maximum , load that can be loaded in to the vehicle
  capacity: { volume:  Number , max_load: Number  },
  fuel_economy:  Number , // Km/l
}
