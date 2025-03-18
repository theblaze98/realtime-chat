import { CreateRoomDto } from '../dto/room/create_room.dto'
import { UpdateRoomDto } from '../dto/room/update_room.dto'
import { IRoomEntitie } from '../entities/room.entitie'

export interface IRoomRepository {
  findOne({ id, name }: { id?: string; name?: string }): Promise<IRoomEntitie>
  findAll(): Promise<IRoomEntitie[]>
  create(room: CreateRoomDto): Promise<IRoomEntitie>
  update(room: UpdateRoomDto): Promise<IRoomEntitie>
  delete(id: string): Promise<void>
}
