const { stdin } = process;
const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, 'notes.txt'),
  '',
  () => {});

console.log('Введите текст: ');

stdin.on('data', data => {
  if(data.toString().includes('exit')){
    console.log('Спасибо, что воспользовались программой!');
    process.exit();
  }else{
    fs.appendFile(
      path.join(__dirname, 'notes.txt'),
      data,
      err => {
      if (err) throw err;
      console.log('Данные внесены');
    })
  }
});

process.on('SIGINT', () => {console.log('Спасибо, что воспользовались программой!');
process.exit()});

