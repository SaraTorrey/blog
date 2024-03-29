let mongoose = require( "mongoose" );
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema( {
          username: String,
          password: String,
          // posts: [{
          //     type: mongoose.Schema.Types.ObjectId,
          //     ref: "Post",
          // }]
      } );

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model( "User", userSchema );
