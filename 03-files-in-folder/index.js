const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '/secret-folder'),{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile()){

        fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
          if (error) {
            console.log(error);
          }
          else {
            console.log(`${path.basename(file.name, path.extname(file.name))} - ${path.extname(file.name).slice(1)} - ${stats.size / 1000}kb`);          
          }
        })
      } 
    })
  }
})

