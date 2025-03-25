import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DrizzleModule } from './infractructure/drizzle/drizzle.module'
import { UserModule } from './infractructure/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    DrizzleModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
