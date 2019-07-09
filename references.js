mongoose  = require( "mongoose" );
mongoose.connect( "mongodb://localhost:27017/blog_app_2", {useNewUrlParser: true} );

let Post = require( "./models/post" );
let User = require( "./models/user" );



// User.create( {
//                  email: "hello@hi.com",
//                  name: "Hello There",
//              } );
//
// Post.create( {
//                  title: "How to do this thingy, part 4",
//                  content: "that is how!"
//              }, function ( err, post ) {
//                 User.findOne({email: "me@gmail.com"}, function(err, foundUser) {
//                         if ( err ) {
//                             console.log( err );
//                         } else {
//                             foundUser.post.push( post );
//                             foundUser.save( function ( err, data ) {
//                                 if ( err ) {
//                                     console.log( err );
//                                 }
//                                 else {
//                                     console.log( data );
//                                 }
//                             } );
//                     }
//                 });
//             } );

// User.findOne({email:"hello@hi.com"}).populate("posts").exec(function ( err, user ) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });