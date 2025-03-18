import { IMessageEntitie } from 'src/domain/entities/message.entitie'
import { SendMessageDto } from '../dto/message.dto'

export interface IChatRepository {
  save(message: SendMessageDto): Promise<void>
  findAllByRoomId(roomId: string): Promise<IMessageEntitie[]>
}
