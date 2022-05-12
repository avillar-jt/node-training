import 'module-alias/register';
import { createServer } from '@infra/primary-inputs/express.server'
import { createDataSource } from '@infra/secondary-outputs/type-orm/type-orm.db'
import { initiateContext } from '@infra/shared/awilix/context-manager'

import dotEnv from 'dotenv';

//env context
dotEnv.config();

//run express (primary-input)
createServer(process.env.EXPRESS_PORT)

//dataSource connection
createDataSource()

//awilix init
initiateContext()