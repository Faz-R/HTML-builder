const fs = require('fs');
const path = require('path');


fs.readdir(__dirname + '/styles',{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile() && path.extname(file.name).slice(1,4) == 'css'){
        const readableStream = fs.createReadStream(__dirname + '/styles/' + file.name);
        readableStream.on('data', chunk => {
          fs.appendFile(
            path.join(__dirname, 'project-dist', 'bundle.css'),
            chunk.toString(),
            err => {
                if (err) throw err;
            }
        );
          chunk.toString()});
      }
    })
  }
})