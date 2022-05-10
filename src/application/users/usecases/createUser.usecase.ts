import { UserRepository } from '@application/users/repository.port';
import { User } from '@domain/users/model';
import { CreateUserUsecase } from '@application/users/usecases/createUser.port';

export interface CreateUserUsecaseProps {
  userRepository: UserRepository;
}

export const createUserUsecase = ({userRepository}: CreateUserUsecaseProps): CreateUserUsecase => {
  const run = async (user: User): Promise<User> => {
    return await userRepository.create(user);//aqui user el repository que tengo en src/infra/secondary-outputs/type-orm/repositories/user.repository.ts
  };

  return run;
};