// Importing node modules
import express from 'express'
// Importing source files
import routes from './routes/main.routes'
// consts
const app = express();

app.use('/', routes);

// arrow functions
app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  // string interpolation:
  console.log(`Example app listening at http://${host}:${port}`);
});
