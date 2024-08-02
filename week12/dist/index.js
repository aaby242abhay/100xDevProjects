"use strict";
function updateUser(updatedProps) {
    console.log(updatedProps);
}
function upadtePartialUser(optionalProps) {
    console.log(optionalProps);
}
updateUser({ name: 'John', email: 'JohnDoe@gmail.com', age: 25 });
upadtePartialUser({ name: 'John' });
