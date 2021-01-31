const fs= require('fs');
//reading files
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     // console.log(data);
//     console.log(data.toString());
// });
// console.log('Last line');


// writing files
// fs.writeFile('./docs/blog.txt','hello There',()=>{
//     console.log('File was written');
// });


// directories
// if(!fs.existsSync('./document')){
//     fs.mkdir('./document',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });
// }else{
//     fs.rmdir('./document',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     })
// }


// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log('File Deleted');
}else{
    fs.writeFile('./docs/deleteme.txt','Hello',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('File Created');
    })
}