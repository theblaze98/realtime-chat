import { SendMessageDto } from '@/application/dto/message.dto'
import { IChatRepository } from '@/application/ports/chat.repository'
import { IMessageEntitie } from '@/domain/entities/message.entitie'

export class SendMessageUseCase {
  constructor(private readonly chatRepository: IChatRepository) {}

  async execute(message: SendMessageDto): Promise<IMessageEntitie> {
    return await this.chatRepository.save(message)
  }
}
