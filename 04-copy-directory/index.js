const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, "files-copy"), { withFileTypes: true }, (err, newFile) => {
    if (err) {
      fs.mkdir(path.join(__dirname, "files-copy"), (err) => {
        if (err) { console.log(err);}
      });
    } else {
      newFile.forEach((newFile) => {
        fs.unlink(path.join(__dirname, "files-copy", newFile.name), (err) => {
          if (err) console.log(err);
        });
      });
    }
  }
);


fs.readdir(path.join(__dirname, 'files'),{ withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
          if (err) {
            console.log("Error Found:", err);
          }
        });
    })
  }
})

