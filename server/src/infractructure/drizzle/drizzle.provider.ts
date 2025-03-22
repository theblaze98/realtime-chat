import { drizzle } from 'drizzle-orm/neon-http'
import { connection } from './helpers/connection'
import * as schema from './schemas'

export const DRIZZLE_PROVIDER = 'DRIZZLE_PROVIDER'
export const drizzleProvider = {
  provide: DRIZZLE_PROVIDER,
  useFactory: () => {
    try {
      return drizzle(connection(), { schema })
    } catch (error) {
      console.error(error)
    }
  },
}
