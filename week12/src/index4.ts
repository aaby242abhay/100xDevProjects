
type _User = {         
    id : string,
    username : string,
}
type Users_ = {             //this is also a way to specify the type of the object
    [key : string] :  {
        id : string,
        username : string,
    }
}
type Users = {              //this is a better way to specify the type of the object
    [key : string] : _User
}

type _Users = Record<string, _User>;        //this is the best way to specify the type of the object in typescript

const users : Users= {
    "acb@123" : {
        id : "abc@123",
        username : "John",
    },
    "qewe@123" : {
        id : "qewe@123",
        username : "Doe",
    }
}
