export interface DriverDetails{
        name: {
            first:String,
            middle?:String,
            last:String
        },
        contact: {
            email: String,
            phone: String
        },
        address: {
            no: String,
            street : String,
            city : String
        },
        allowed_vehicle : [ {type:String} ],
        _id: String,
        role: String,
}
