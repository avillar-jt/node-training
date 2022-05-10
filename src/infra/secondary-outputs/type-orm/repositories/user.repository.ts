
import { UserEntity } from '@infra/secondary-outputs/type-orm/entities/user.entity'
import { User } from '@domain/users/model'
import { getDataSource } from '@infra/secondary-outputs/type-orm/type-orm.db'
import { DataSource } from "typeorm"

export interface UserRepository {
	findAll: () => Promise<User[]>;
};

export interface createUserRepositoryProps {
	dbConnection: DataSource;
};

export const createUserRepository = ({dbConnection}: createUserRepositoryProps): UserRepository => {
  dbConnection = getDataSource()
	const userRepository = dbConnection.getRepository(UserEntity)
  const findAll = async (): Promise<User[]> => {
    return await userRepository.find()
  }

  return {
    findAll
  }
};