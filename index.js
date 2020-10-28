import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/items.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/items',itemRoutes);

app.get('/', function (req, res) {
  res.send('automation engineer home exercise -tomer marzok');


});
app.listen(3000, function () {
  console.log('Example app listening on port 3000! check');
});
