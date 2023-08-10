import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { menu, menuSchema } from './schema/menu';

@Module({
  imports:[MongooseModule.forFeature([{name: menu.name, schema:menuSchema }])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
