const { exec } = require('child_process');
const fs = require('fs');

// Run the dir command
exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  // Write the output to a text file
  fs.writeFile('output.txt', stdout, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }
    console.log('Command output saved to output.txt');
  });
});
