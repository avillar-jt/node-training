import { UserRepository } from '@application/users/repository.port';
import { User } from '@domain/users/model';
import { CreateUserUsecase } from '@application/users/usecases/createUser.port';

export const createUserUsecase = async ( user: User, userRepository: UserRepository) : CreateUserUsecase => {
  return await userRepository.create(user);
};