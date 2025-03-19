import { CreateRoomDto } from 'src/application/dto/room.dto'
import { IRoomRepository } from 'src/application/ports/room.repository'
import { IRoomEntitie } from 'src/domain/entities/room.entitie'

export class CreateRoomUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async execute(room: CreateRoomDto): Promise<IRoomEntitie> {
    return this.roomRepository.create(room)
  }
}
