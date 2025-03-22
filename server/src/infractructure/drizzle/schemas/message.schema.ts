import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { roomSchema } from './room.schema'
import { userSchema } from './user.schema'

export const messageSchema = pgTable('messages', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  roomId: varchar('room_id', { length: 255 })
    .notNull()
    .references(() => roomSchema.id, { onDelete: 'no action' }),
  userId: varchar('user_id', { length: 255 }).notNull(),
  text: varchar('text', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const messageRelations = relations(messageSchema, ({ one }) => ({
  room: one(roomSchema, {
    fields: [messageSchema.roomId],
    references: [roomSchema.id],
  }),
  user: one(userSchema, {
    fields: [messageSchema.userId],
    references: [userSchema.id],
  }),
}))
