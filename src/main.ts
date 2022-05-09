import 'module-alias/register';
import { createServer } from '@infra/primary-inputs/express.server'
import dotEnv from 'dotenv';

//env context
dotEnv.config();

//run express (primary-input)
createServer(process.env.EXPRESS_PORT)