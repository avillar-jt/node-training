import express from 'express';
import bodyParser from 'body-parser';
import router from '@infra/primary-inputs/express.router'

const app = express();

export const createServer = (port: any) => {
  app.use(bodyParser.json());
  
  app.use(router())

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
  
  app.get('/', (req, res) => {
    res.send('API under construction')
  })
}