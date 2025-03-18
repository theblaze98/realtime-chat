import { CreateMessageDto } from '../dto/message/create_message.dto'
import { UpdateMessageDto } from '../dto/message/update_message.dto'
import { IMessageEntitie } from '../entities/message.entitie'

export interface IMessageRepository {
  findAll(): Promise<IMessageEntitie>
  create(message: CreateMessageDto): Promise<IMessageEntitie>
  update(message: UpdateMessageDto): Promise<IMessageEntitie>
  delete(id: string): Promise<void>
}
