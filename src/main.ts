import { createServer } from './infra/primary-inputs/express.server'

//context
import dotEnv from 'dotenv';
dotEnv.config();

//run express (primary-input)
createServer(process.env.EXPRESS_PORT)