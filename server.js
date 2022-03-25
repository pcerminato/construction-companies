const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT ?? 3001;
const ROOT_PATH = process.env.ROOT_PATH ?? '';

app.use(`${ROOT_PATH}/`, express.static(path.join(__dirname, 'build')));

app.get('/_health', (_req, res) => {
  return res.json({
    status: 'OK',
  });
});

app.get(`${ROOT_PATH}/*`, (req, res) => {
  const htmlFilePath = path.join(__dirname, 'build', 'index.html');

  fs.readFile(htmlFilePath, (err, file) => {
    if (err) {
      return res.sendFile(htmlFilePath);
    }

    let stingifiedHtmlFile = file.toString();

    res.send(stingifiedHtmlFile);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});