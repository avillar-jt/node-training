import { DataSource } from "typeorm"
import { UserEntity } from '@infra/secondary-outputs/type-orm/entities/user.entity'

let conn : DataSource
export const createDataSource = async (): Promise<DataSource> => {
  const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node-training",
    entities: [
      UserEntity
    ],
  })

  conn = await PostgresDataSource.initialize()
  if (conn.isInitialized) {
    console.log(`DataSource [Postgres] is connected`)
  }

  return conn
}

export const getDataSource = () : DataSource => {
  return conn
}