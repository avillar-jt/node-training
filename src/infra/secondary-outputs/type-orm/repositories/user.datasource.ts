
import { UserEntity } from '@infra/secondary-outputs/type-orm/entities/user.entity'
import { User } from '@domain/users/model'
import { UserRepository } from '@application/users/repository.port'
import { getDataSource } from '@infra/secondary-outputs/type-orm/type-orm.db'

class UserDb implements UserRepository {
  public async create (user: User) : Promise<User> {
    const dbConnection = getDataSource()
    const dbRepository = dbConnection.getRepository(UserEntity)
    const result = await dbRepository.insert(user)
    const userCreated = {
      ...user,
      id: result.identifiers.at(0)?.id
    }
    return userCreated
  }

  public async findAll () : Promise<User[]> {
    const dbConnection = getDataSource()
    const dbRepository = dbConnection.getRepository(UserEntity)
    return await dbRepository.find()
  }
}

export default UserDb;