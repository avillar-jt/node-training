import { User } from '@domain/users/model';

export type FindUsersUsecase = () => Promise<User[]>;