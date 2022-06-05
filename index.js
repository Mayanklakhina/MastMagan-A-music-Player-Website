const express = require('express');
const app = express();
const port = process.env.PORT||8000;
const db = require('./configuration/mongoose');
const session=require('express-session');
const passport = require('passport');
const passportLocal = require('./configuration/passport-local-strategy');
app.use(express.urlencoded({
    extended:false
}))
const MongoStore =  require('connect-mongo');
const flash = require('connect-flash');
const customMware= require('./configuration/middleware');

app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('./assets'));

  app.use(session({
    //name of cookie
    name: 'mastmagan',
    //Todo change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: process.env.DB_URL,
            autoRemove: 'disabled'
        }, function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());  

// doubt why we did this 
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setFlash);

app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        // console.log('Error: ',err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});