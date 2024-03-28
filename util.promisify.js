const util = require('util');


async function readFilePromisified(filename) {
    const readFile = util.promisify(readFile);  // Promisify the original function
    return await readFile(filename);  // Call the promisified version with await
  }
  


  (async () => {
    try {
      const content = await readFilePromisified('data.txt');
      console.log('File content:', content);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  })();
  