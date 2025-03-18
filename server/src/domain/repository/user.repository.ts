import { CreateUserDto } from '../dto/user/create_user.dto'
import { UpdateUserDto } from '../dto/user/update_user.dto'
import { IUserEntitie } from '../entities/user.entitie'

export interface IUserRepository {
  findOne({
    id,
    email,
    username,
  }: {
    id?: string
    email?: string
    username?: string
  }): Promise<IUserEntitie>
  findAll(): Promise<IUserEntitie[]>
  create(user: CreateUserDto): Promise<IUserEntitie>
  update(user: UpdateUserDto): Promise<IUserEntitie>
  delete(id: string): Promise<void>
}
