import { neon } from '@neondatabase/serverless'

export const connection = () => {
  return neon(`${process.env.NEON_DATABASE_URL}`)
}
