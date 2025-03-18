import { IUserRepository } from 'src/application/ports/user.repository'

export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    id,
    email,
    username,
  }: {
    id?: string
    email?: string
    username?: string
  }): Promise<void> {
    await this.userRepository.findOne({ id, email, username })
  }
}
