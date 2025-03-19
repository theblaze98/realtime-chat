import { IRoomEntitie } from 'src/domain/entities/room.entitie'
import { CreateRoomDto, UpdateRoomDto } from '../dto/room.dto'

export interface IRoomRepository {
  findOne({ id, name }: { id?: string; name?: string }): Promise<IRoomEntitie>
  findAll(): Promise<IRoomEntitie[]>
  findByUserId(userId: string): Promise<IRoomEntitie[]>
  create(room: CreateRoomDto): Promise<IRoomEntitie>
  update(id: string, room: UpdateRoomDto): Promise<IRoomEntitie>
  delete(id: string): Promise<void>
}
