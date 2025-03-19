import { IChatRepository } from '@/application/ports/chat.repository'
import { IMessageEntitie } from '@/domain/entities/message.entitie'

export class GetMessagesUseCase {
  constructor(private readonly chatRepository: IChatRepository) {}

  async execute(roomId: string): Promise<IMessageEntitie[]> {
    return await this.chatRepository.findAllByRoomId(roomId)
  }
}
