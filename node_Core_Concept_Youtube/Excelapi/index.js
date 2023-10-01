const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const xlsx = require('xlsx');
const fs = require('fs');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // Register the inert plugin for serving static files (for uploads)
  await server.register(require('@hapi/inert'));

  // API endpoint to upload an Excel file
  server.route({
    method: 'POST',
    path: '/upload',
    options: {
      payload: {
        output: 'stream',
        parse: true,
        multipart: true,
        allow: 'multipart/form-data'
      }
      
    },
    handler: async (request, h) => {
      const file = request.payload.file;
      const filePath = `uploads/${file.hapi.filename}`;

      const writeStream = fs.createWriteStream(filePath);
      file.pipe(writeStream);

      return new Promise((resolve, reject) => {
        writeStream.on('error', (err) => reject(err));

        writeStream.on('finish', () => {
          // Read the Excel file
          const workbook = xlsx.readFile(filePath);
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          // Parse the sheet data to JSON
          const jsonData = xlsx.utils.sheet_to_json(sheet);

          resolve({ data: jsonData });
        });
      });
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
