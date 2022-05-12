import { asClass, createContainer, InjectionMode } from 'awilix'
import UserDb from '@infra/secondary-outputs/type-orm/repositories/user.datasource'

export const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

export const initiateContext = () : any => {
  container.register({
    userRepository: asClass(UserDb)
  })
}