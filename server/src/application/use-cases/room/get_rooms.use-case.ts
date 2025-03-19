import { IRoomRepository } from 'src/application/ports/room.repository'
import { IRoomEntitie } from 'src/domain/entities/room.entitie'

export class GetRoomsUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async execute(userId: string): Promise<IRoomEntitie[]> {
    return this.roomRepository.findByUserId(userId)
  }
}
