import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ApiTags } from '@nestjs/swagger';
import { MenuModule } from './menu/menu.module';
import { OrdersModule } from './orders/orders.module';

@ApiTags('User')
@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:[".local.env"]
  }),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory:(configService:ConfigService)=> ({uri: configService.get("mongo_uri")}),
    inject:[ConfigService]
  }),
   UserModule,
   MenuModule,
   OrdersModule,],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
