export interface StorekeeperDetails{
   
    name: {
        first: String,
        middle?: String,
        last: String
    },
    contact: {
        email: String,
        phone: String
    },
    address: {
        no: String,
        street: String,
        city: String
    },
    _id: String,
    role: String,
    
}