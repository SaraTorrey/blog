mongoose    = require( "mongoose" );
mongoose.connect( "mongodb://localhost:27017/blog_app", {useNewUrlParser: true} );

let postSchema = new mongoose.Schema( {
                                          title: String,
                                          content: String,

                                      } );
let Post = mongoose.model( "Post", postSchema );

let userSchema = new mongoose.Schema( {
                                          email: String,
                                          name: String,
                                          posts: [postSchema],
                                      } );
let User = mongoose.model( "User", userSchema );

User.findOne( {name: "Meme"}, function ( err, user ) {
    if ( err ) {
        console.log( err );
    }
    else {
        user.posts.push( {
                             title: "How to do anything right... .",
                             content: "Just be me... heehee"
                         } );
        user.save(function ( err, user ) {
              if(err){
                console.log(err);
            } else {
                console.log(user);
            }
                })
            }
    });

//
// let newUser = new User( {
//                             email: "me@me.com",
//                             name: "Meme",
//                         } );
//
// newUser.posts.push( {
//                         title: "how to be awesome",
//                         content: "you have to be me",
//                     } );
// newUser.save( function ( err, user ) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// } );
//


// let newPost = new Post( {
//                             title: "Apples",
//                             content: "Yum!",
//                         } );
//
// newPost.save( function ( err, post ) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//      }
// } );
