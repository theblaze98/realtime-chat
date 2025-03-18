import { IUserEntitie } from 'src/domain/entities/user.entitie'
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto'

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
