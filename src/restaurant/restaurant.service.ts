import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './schema/schema';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name)private restaurantModel :Model <RestaurantDocument>){}
  create(createRestaurantDto: CreateRestaurantDto) :Promise<Restaurant> {
    const model = new this.restaurantModel();
    model.name=createRestaurantDto.name;
    model.location=createRestaurantDto.location;
    return model.save();
  }

  findAll() :Promise<Restaurant[]>{
    return this.restaurantModel.find().exec();
  }

  findOne(id: string) :Promise<Restaurant>{
    return this.restaurantModel.findById(id).exec();
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantModel.updateOne({_id:id},{
      name:updateRestaurantDto.name,
      location:updateRestaurantDto.location,
    });
  }

  remove(id: string) {
    return this.restaurantModel.deleteOne({_id:id});
  }
}
