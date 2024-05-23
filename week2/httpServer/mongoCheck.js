const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://aaby242abhay:%402l4P2@mongo101.mjuaccs.mongodb.net/testDataStorage");

const User = mongoose.model('Users', { name : String, email : String, password : String});

const newUser = new User({
    name : 'Aaby Abhay Singh IS',
    email : 'abc@ex.comsdhfjsb',
    password : '123442sfjsdhf'
})

newUser.save().then(()=>{
    console.log('The data has been saved');
})