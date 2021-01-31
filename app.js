const express= require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogsRoutes')

// Express app
const app=express();

// Connect to MongoDB
const dbURL = "mongodb://localhost:27017/blogger";
mongoose.connect(dbURL,{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>{ 
        console.log(' Connection Successful to db');
        // Listen for Request
        app.listen(3000,'localhost');
    }).catch((err)=>{console.log('Connection Unsuccessful \n '+err);});

//register view engine
app.set('view engine','ejs');
// app.set('views','view') //default 'views' folder



// Middleware & Static Files

// Middleware to log the user data
// app.use((req,res,next)=>{
//     console.log('New Request Made :');
//     console.log('Host: ',req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method: ',req.method);
//     next();
// });

// 3rd party middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// Static Files
app.use(express.static('public'));

// mongoose & mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'new blog2',
//         snippet: 'about my new blog',
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum, incidunt eligendi ducimus aliquid harum animi, quasi rerum corrupti at optio vero. Repellat ullam velit autem in veniam, deleniti neque.'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     }).catch((err)=>{console.log(err);});
// });

// app.get('/all-blog',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         }).catch((err)=>{console.log(err);});
// });

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('60165370737a97260c59c93a')
//         .then((result)=>{
//             res.send(result);
//         }).catch((err)=>{console.log(err);});
// });


// routes
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    // res.send('<h1>About Page</h1>');
    res.render('about',{title:'About'});
});

// Blog route
app.use('/blogs',blogRoutes);

// 404 Page (Put it at last of all routes)
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})


