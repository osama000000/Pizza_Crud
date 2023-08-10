import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MenuDocument, order } from './schema/order';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(order.name) private readonly menuModel: Model<MenuDocument>,
  ) {

  }
  create(createMenuDto: CreateOrderDto): Promise<order> {
    const model = new this.menuModel;
    model.name = createMenuDto.name;
    model.quantity = createMenuDto.quantity;
    model.address = createMenuDto.address;
    model.currency = createMenuDto.currency;
    model.deliverybill = createMenuDto.deliverybill;

    return model.save();

  }
  findAll(): Promise<order[]> {
    return this.menuModel.find().exec();
  }

  findOne(id: string): Promise<order> {
    return this.menuModel.findById(id).exec();
  }

  update(id: string, updateMenuDto: UpdateOrderDto) {

    return this.menuModel.updateOne({ _id: id }, {
      name: updateMenuDto.name,
      quantity: updateMenuDto.quantity,
      address: updateMenuDto.address,
      currency: updateMenuDto.currency,
      deliverybil: updateMenuDto.deliverybill
    });
  }

  remove(id: string) {
    return this.menuModel.deleteOne({ _id: id });
  }
}

