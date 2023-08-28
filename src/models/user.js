/*virtual()=document attributes that only exist logically and are not written to the document's collection in the MongoDB database

bcrypt= password hashing and safe storing in the backend of applications in a way that is less susceptible to dictionary-based cyberattacks.

*/


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstName: {  
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20
   },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
   },
   username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true, 
    lowercase: true
   },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
   },
   hash_password: {
         type: String,
         required: true
   },
    role: {
         type: String,
         enum: ['user', 'admin'],
         default:'admin'
    },
    contactNumber: { type: String },
    profilepicture: { type: String },
},{ timestamps: true});//this is the pre-defined setup of date and time.
    
    

userSchema.virtual('password')
.set(function(password){
     this.hash_password = bcrypt.hashSync(password, 10);//this is bcrypt formate.
});// virtual function. to run this we have to install bcrypt

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}


 module.exports = mongoose.model('User' , userSchema);