let fs = require('fs');
let os = require('os');

  console.log(os.userInfo());

//   [Object: null prototype] {
//   uid: -1,
//   gid: -1,
//   username: 'SATYAM PAL',
//   homedir: 'C:\\Users\\SATYAM PAL',
//   shell: null
// }

// want user name 

  console.log(os.userInfo().username);

  // SATYAM PAL

fs.appendFile(

    'xFile.txt', ' .... message - > this is ' + os.userInfo().username + '\n', ()=>{
        console.log('File is Created');
    } 

) // this is fs function (fileName, message, callbackFunction)  
