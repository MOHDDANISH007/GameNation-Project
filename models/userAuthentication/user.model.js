import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true,
        unique : true
    },
    userPassword : {
        type : String,
        required : true
    },
    cart : [
        {
            productId : {
                type : Number
            },
            quantity : {
                type : Number
            }
        }
    ]
}, {timestamps : true});


const User = mongoose.model('User', userSchema);
export default User;
