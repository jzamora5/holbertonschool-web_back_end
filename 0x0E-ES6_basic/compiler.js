function compiler(input, output) {
  const { exec } = require('child_process');

  exec(`npx babel ${input} --out-file ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    // console.log(`stdout: ${stdout}`);
  });
}

module.exports = compiler;
