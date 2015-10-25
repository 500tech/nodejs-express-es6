import express from 'express'
import routes from './routes/main.routes'
const app = express();

app.use('/', routes);

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
