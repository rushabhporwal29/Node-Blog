const fs=require('fs')

const readstram=fs.createReadStream('./docs/blog1.txt',{encoding:'utf-8'});
const writestream=fs.createWriteStream('./docs/blog2.txt');
// readstram.on('data',(chunk)=>{
//     console.log('New Data');
//     console.log(chunk);
//     writestream.write('\n New Data \n');
//     writestream.write(chunk);
    
// });


// piping

readstram.pipe(writestream);

