////const http=require('http');
/*
const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
console.log('this is always run');
 next();  // alows the request to continue to the next middleware in line
});

app.use('/add-product',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1>the"add product"</h1>');
    });

    app.use('/',(req,res,next)=>{
        console.log('in another!! middleware');
        res.send('<h1>hello from express</h1>');
        });

////const server=http.createServer(app);

////server.listen(3001);

////   or 

//app.listen(3001);

*/


//-----task 2 video parsing incoming request


//const http=require('http');

/*
const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">add product</button></form>');
    });

    app.use('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    });
    app.use('/',(req,res,next)=>{
        res.send('<h1>hello from express</h1>');
        });

//const server=http.createServer(app);

//server.listen(3001);

//   or 

app.listen(3001);

*/


//--------limiting middleware execution to post requests-------


/*
const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">add product</button></form>');
    });

    app.post('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    });
    app.use('/',(req,res,next)=>{
        res.send('<h1>hello from express</h1>');
        });

//const server=http.createServer(app);

//server.listen(3001);

//   or 

app.listen(3001);


*/

//chat app using express

const express=require('express');

const app = express();
const bodyParser = require('body-parser');
const loginRoute=require('./routes/login')
const messageRoute = require('./routes/message')


app.use(bodyParser.urlencoded({ extended:false}))

app.use(loginRoute)
app.use(messageRoute)
app.listen(7000)