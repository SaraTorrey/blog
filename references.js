mongoose    = require( "mongoose" );
mongoose.connect( "mongodb://localhost:27017/blog_app_2", {useNewUrlParser: true} );

let postSchema = new mongoose.Schema( {
      title: String,
      content: String,
  } );
let Post = mongoose.model( "Post", postSchema );

let userSchema = new mongoose.Schema( {
      email: String,
      name: String,
      posts: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
      }],
  } );
let User = mongoose.model( "User", userSchema );

// User.create( {
//                  email: "hello@hi.com",
//                  name: "Hello There",
//              } );
//
// Post.create( {
//                  title: "How to do this thingy, part 3",
//                  content: "that's how!"
//              }, function ( err, post ) {
//                 User.findOne({email: "hello@hi.com", function(err, foundUser) {
//                         if ( err ) {
//                             console.log( err );
//                         }
//                         else {
//                             foundUser.posts.push( post );
//                             foundUser.save( function ( err, data ) {
//                                 if ( err ) {
//                                     console.log( err );
//                                 }
//                                 else {
//                                     console.log( data );
//                                 }
//                             } );
//                         }
//                     }
//                 });
//             } );

User.findOne({email:"hello@hi.com"}).populate("posts").exec(function ( err, user ) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});