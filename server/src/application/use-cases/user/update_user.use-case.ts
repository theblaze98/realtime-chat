import { UpdateUserDto } from 'src/application/dto/user.dto'
import { IUserRepository } from 'src/application/ports/user.repository'
import { IUserEntitie } from 'src/domain/entities/user.entitie'

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, user: UpdateUserDto): Promise<IUserEntitie> {
    const userToUpdate = await this.userRepository.findOne({ id })
    if (!userToUpdate) {
      throw new Error('User not found')
    }

    return this.userRepository.update(id, user)
  }
}
