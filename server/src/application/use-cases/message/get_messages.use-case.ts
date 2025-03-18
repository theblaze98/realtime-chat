import { IChatRepository } from 'src/application/ports/chat.repository'

export class GetMessagesUseCase {
  constructor(private readonly chatRepository: IChatRepository) {}

  async execute(roomId: string): Promise<void> {
    await this.chatRepository.findAllByRoomId(roomId)
  }
}
