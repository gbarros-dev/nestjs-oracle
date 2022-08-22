import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'oracle',
        host: '192.168.100.200',
        port: 1521,
        serviceName: 'WINT19TT',
        username: 'LIVIA',
        password: 'LIVIA',
        synchronize: true,
      }),
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
