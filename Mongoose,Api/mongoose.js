const mongoose = require("mongoose");
const validator=require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  userNewUrlParser: true,
  userCreateIndex: true,
});

const user = mongoose.model("user", {
  name: {
    type: String,
  },
  age: {
    type: Number,
    required:true  
,
    validate(value){
        if(value<0){
            throw new Error('please enter positive number')
        }
    }
  },
  password:{
      type:String,
      required:true,
      minlength:6,
      trim:true,
      validate(value){
          if(value.toLowerCase().includes('password')){
              throw new Error('password must be more than 6')
          }
      }
  }
});

const me = new user({
  name: "jay",
  age: 22,
  password:'44dd'
});

me.save()
  .then(() => {
    console.console.log(me);
  })
  .catch((error) => {
    console.console.log("Error", error);
  });


