import { CreateUserDto } from 'src/application/dto/user.dto'
import { IUserRepository } from 'src/application/ports/user.repository'

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(user: CreateUserDto): Promise<void> {
    await this.userRepository.create(user)
  }
}
