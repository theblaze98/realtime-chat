import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { roomSchema } from './room.schema'
import { messageSchema } from './message.schema'

export const userSchema = pgTable('users', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  username: varchar('username', { length: 100 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const userRelations = relations(userSchema, ({ many }) => ({
  rooms: many(roomSchema),
  messages: many(messageSchema),
}))
