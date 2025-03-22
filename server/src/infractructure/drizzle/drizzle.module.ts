import { Module } from '@nestjs/common'
import { DRIZZLE_PROVIDER, drizzleProvider } from './drizzle.provider'

@Module({
  providers: [drizzleProvider],
  exports: [DRIZZLE_PROVIDER],
})
export class DrizzleModule {}
