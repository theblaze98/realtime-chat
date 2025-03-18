export interface CreateRoomDto {
  userId1: string
  userId2: string
  name: string
}

export interface UpdateRoomDto {
  name?: string
}
