import { SendMessageDto } from 'src/application/dto/message.dto'
import { IChatRepository } from 'src/application/ports/chat.repository'

export class SendMessageUseCase {
  constructor(private readonly chatRepository: IChatRepository) {}

  async execute(message: SendMessageDto): Promise<void> {
    await this.chatRepository.save(message)
  }
}
