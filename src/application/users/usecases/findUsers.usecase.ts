import { UserRepository } from '@application/users/repository.port';
import { FindUsersUsecase } from '@application/users/usecases/findUsers.port';

export const findUsersUsecase = async (userRepository: UserRepository) : FindUsersUsecase => {
  return await userRepository.findAll();
};