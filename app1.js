const express= require('express');


// Express app
const app=express();

// Listen for Request
app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<h1>Home Page</h1>');
    res.sendFile('./view/index.html',{root:__dirname});
});

app.get('/about',(req,res)=>{
    // res.send('<h1>About Page</h1>');
    res.sendFile('./view/about.html',{root:__dirname});
});
app.get('/MyFirstPage.css',(req,res)=>{
    res.sendFile('./view/MyFirstPage.css',{root:__dirname});
});

// Redirect
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
});

// 404 Page (Put it at last of all routes)
app.use((req,res)=>{
    res.status(404).sendFile('./view/invalid.html',{root:__dirname});
})


