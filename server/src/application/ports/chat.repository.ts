import { IMessageEntitie } from '@/domain/entities/message.entitie'
import { SendMessageDto } from '../dto/message.dto'

export interface IChatRepository {
  save(message: SendMessageDto): Promise<IMessageEntitie>
  findAllByRoomId(roomId: string): Promise<IMessageEntitie[]>
}
