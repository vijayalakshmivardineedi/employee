/*
1.const=immutable of variable.
2.express=variable;  whatever we want.
3.require()=predifined function, which perfore a particular task of (lets you include modules within your project).
4.'express'=predifined class or method, which perfore a particular task.
5.all the below are same as defined above.

6.MIDDLEWARE=use(express.json())=process data sent through an HTTP request body.

7.explanation---->
app=express,
.get()=predifined function, which perfore a particular task of (getting that particular we want).
.post()=predifined function, which perfore a particular task of (posting that particular we want).
'/'=after PORT number we have to end PORT by /
'/data'=after PORT number we have to end PORT by /; and the data we want for recognization we can write.
(req,res,next)=these are parameters; in which we have to choose according to the reqirement of ours.
res.status(200)=the choosen parameter;.status()=if the server working or not.example=401 error etc..,
.json()=the extension of the file.
{message:'Hello from Server'});= whatever the message we want we can write.
message:req.body=  if we want to post a request to the server, example= searching in google etc..,

8.app.listen()=predifined function, which perfore a particular task of listen to the connections on the specified host and port.
                                                 process.env.PORT,()=processing of environment variable with the PORT,here PORT is having a number.
                                                 console.log=method; outputs a message to the web console
*/



const express = require ('express');
const env = require('dotenv');
const app = express();
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');//importing from routes/auth.js file into authRoutes.
const adminRoutes = require('./routes/admin/auth');//importing from routes/admin/auth.js file into authRoutes.

//env.config()=environment configuration;()here we can call the PORT by the path.
env.config();

//mongoose connection.
//mongodb+srv://vijayalakshmi:<password>@cluster0.1gvyg19.mongodb.net/?retryWrites=true&w=majority,this is original path
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.1gvyg19.mongodb.net/${process.env.MONGO_DB_DATABASE}}?retryWrites=true&w=majority`,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
            
    }
).then(() => {
    console.log('Database connected');
});
//we can use express insted-of bodyParser, but express is fine but we have a special method for this purpose, that is body-parser.
app.use(express.json());//6.MIDDLEWARE.
app.use('/api', authRoutes);//instruction to http link use this.
app.use('/api', adminRoutes);//instruction to http link use this.

app.listen(process.env.PORT,()=>{
console.log(`Server is running on port ${process.env.PORT}`);//8. AND calling and using the PORT to run the program to run under this port number.
                                                

});

/*app.get('/', (req,res,next)  => {
    res.status(200).json({
        message:'Hello from Server'
    });
});
app.post('/data', (req,res,next)  => {
    res.status(200).json({
        message:req.body
    });
}); */ //7.   And these are for testing the postman porpose. 
//write under app.use(bodyParser.json()); line...
