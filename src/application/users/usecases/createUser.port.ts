import { User } from '@domain/users/model';

export type CreateUserUsecase = (user: User) => Promise<User>;