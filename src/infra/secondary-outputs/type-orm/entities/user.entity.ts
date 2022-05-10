import { EntitySchema } from 'typeorm'
import { User } from '@domain/users/model'

export const UserEntity = new EntitySchema<User>({
  name: 'user',
  columns: {
    availability: {
      type: String
    },
    country: {
      type: String
    },
    email: {
      type: String

    },
    name: {
      type: String
    },
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    }
  }
})