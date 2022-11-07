const fs = require('fs');
const path = require('path');



fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
  if (err) throw err;
});


fs.readdir(__dirname + '/files',{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
        fs.copyFile(__dirname + '/files/' + file.name, __dirname + '/files-copy/' + file.name, (err) => {
          if (err) {
            console.log("Error Found:", err);
          }
        });
    })
  }
})

