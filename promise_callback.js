function readFile(filename, callback) {
    setTimeout(() => {
      const content = 'File content';  // Simulate reading file content
      if (filename === 'error.txt') {
        callback(new Error('Error reading file'), null);
      } else {
        callback(null, content);
      }
    }, 1000); 
  }
  

  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      readFile(filename, (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(content);
        }
      });
    });
  }
  
// other commendable approach

//   readFilePromise('data.txt')
//   .then(content => {
//     console.log('File content:', content);
//   })
//   .catch(err => {
//     console.error('Error reading file:', err);
//   });