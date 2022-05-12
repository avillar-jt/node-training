import { User } from '@domain/users/model'
import { createUserUsecase } from '@application/users/usecases/createUser.usecase'
import { findUsersUsecase } from '@application/users/usecases/findUsers.usecase'
import { container } from '@infra/shared/awilix/context-manager'

const findAllUsers = (async (req: any, res: any) => {
  const userRepository = container.resolve('userRepository')
  const users : User[] = await findUsersUsecase(userRepository)
  res.json(users)
})

const createUser = (async (req: any, res: any) => {
  const userRepository = container.resolve('userRepository')
  const body = req.body
  //avoid validation
  const user : User = body
  const newUser = await createUserUsecase(user, userRepository)
  res.json(newUser)
})

module.exports = {
  findAllUsers,
  createUser,
}