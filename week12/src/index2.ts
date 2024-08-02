type SuperUser = {
    readonly name : string;
    readonly age : number;
    readonly email : string;
}
type NormalUser = {
    name : string;
    age : number;
    email : string;
}

const diffUser : Readonly<NormalUser> = {           //we can assign the readonly propery to the normal type as well as a whole
    name : "Doe",
    age : 35,
    email : "jsbfkjds@gmail.com"
}

const user : SuperUser = {
    name : "John",
    age : 25,
    email : "john@gmail.com"
}

// user.name  = "Abhay";    // Error: Cannot assign to 'name' because it is a read-only property.


