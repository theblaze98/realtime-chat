import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { userSchema } from './user.schema'
import { messageSchema } from './message.schema'

export const roomSchema = pgTable('rooms', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId1: varchar('user_id1', { length: 255 })
    .notNull()
    .references(() => userSchema.id, { onDelete: 'no action' }),
  userId2: varchar('user_id2', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const roomRelations = relations(roomSchema, ({ one, many }) => ({
  user1: one(userSchema, {
    fields: [roomSchema.userId1],
    references: [userSchema.id],
  }),
  user2: one(userSchema, {
    fields: [roomSchema.userId2],
    references: [userSchema.id],
  }),
  messages: many(messageSchema),
}))
