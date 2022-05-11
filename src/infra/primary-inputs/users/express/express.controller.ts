import { User } from '@domain/users/model'
import { createUserUsecase } from '@application/users/usecases/createUser.usecase'
import UserDb from '@infra/secondary-outputs/type-orm/repositories/user.datasource';

const findAllUsers = ((req: any, res: any) => {
  const params = req.params
  res.json({'prueba': 'prueba'})
})

const createUser = (async (req: any, res: any) => {
  const userRepository = new UserDb()
  const params = req.params
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