interface User{
    id : number,
    name : string,
    email : string,
    age : number,
    password : string
}

type updatedProps = Pick<User, 'name' | 'email' | 'age'>;
type optionalProps = Partial<updatedProps>;

function updateUser (updatedProps: updatedProps){
    console.log(updatedProps);
}
function upadtePartialUser (optionalProps : optionalProps){
    console.log(optionalProps);
}

updateUser({name : 'John', email : 'JohnDoe@gmail.com', age : 25});
upadtePartialUser({name : 'John'});


