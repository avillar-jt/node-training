import { User } from '@domain/users/model'

export interface UserRepository {
  findAll: () => Promise<User[]>
  create: (user: User) => Promise<User>
}