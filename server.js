const http=require('http');
const fs= require('fs');
const _= require('lodash');

const server= http.createServer((req,res)=>{
    // console.log(req);
    console.log(req.url,req.method);

    // lodash
    const num=_.random(0,99);
    console.log(num);

    const greet=_.once(()=>{
        console.log('Hello');
    });
    greet();
    greet();
    
    // set header content type
    res.setHeader('Content-Type','text/html');
    // res.write('<h1>hello There</h1>');

    let path='./view/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=303;
            res.setHeader('Location','./about');
            res.end()

        case '/MyFirstPage.css':
            path+='MyFirstPage.css';
            res.statusCode=200
            break;
        case '/2-110R11533570-L.jpg':
            path+='2-110R11533570-L.jpg';
            res.statusCode=200
            break;
        default:
            path+='invalid.html'
            res.statusCode=404
        
    }


    
    // send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }
        else{
            // console.log(data.toString());
            // res.write(data.toString(),(err)=>{
            //     if(err){
            //         console.log(err);
            //     }
            // });
            // res.end()
            res.end(data)
        }
    })

    
});

server.listen(3000,'localhost',()=>{
    console.log("Listening for requests on port 3000");
});