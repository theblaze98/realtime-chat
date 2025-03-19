import { CreateRoomDto } from '@/application/dto/room.dto'
import { IRoomRepository } from '@/application/ports/room.repository'
import { IRoomEntitie } from '@/domain/entities/room.entitie'

export class CreateRoomUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async execute(room: CreateRoomDto): Promise<IRoomEntitie> {
    return await this.roomRepository.create(room)
  }
}
