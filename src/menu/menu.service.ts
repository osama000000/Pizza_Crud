import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MenuDocument, menu } from './schema/menu';
import { Model } from 'mongoose';


@Injectable()
export class MenuService {
  
  constructor (@InjectModel(menu.name) private readonly menuModel: Model<MenuDocument>,
  ){
 
   }

   create(createMenuDto: CreateMenuDto) :Promise<menu>{
    const model = new this.menuModel;
    model.type=createMenuDto.type;
    model.price=createMenuDto.price;
    model.deals=createMenuDto.deals;
    
    return  model.save();
   
  }
  findAll() : Promise<menu[]>{
    return this.menuModel.find().exec();
  }

  findOne(id: string):Promise<menu> {
    return this.menuModel.findById(id).exec();
  }
  update(id: string, updateMenuDto: UpdateMenuDto) {

    return this.menuModel.updateOne({_id:id},{
      type:updateMenuDto.type,
      price:updateMenuDto.price,
      deals:updateMenuDto.deals,
    });
  }
  remove(id: string) {
    return this.menuModel.deleteOne({_id:id});
  }
  async listMenus(): Promise<menu[]> {
    return this.menuModel.find().exec();
   // return menus;
  }
}
