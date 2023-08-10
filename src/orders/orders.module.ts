import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { order, orderSchema } from './schema/order';

@Module({
  imports: [MongooseModule.forFeature([{ name: order.name, schema: orderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
