const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'project-dist' ,'bundle.css'));


fs.readdir(path.join(__dirname, 'styles'),{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile() && path.extname(file.name).slice(1,4) == 'css'){
        const input = fs.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
          input.pipe(output);    
      }
    })
  }
})

