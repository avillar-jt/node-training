import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

dotEnv.config();

const app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`server started at http://localhost:${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World')
})