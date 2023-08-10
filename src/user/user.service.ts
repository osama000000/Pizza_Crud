import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user';
import { Model } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){}
  create(createUserDto: CreateUserDto ) :Promise<User>{
    const model = new this.userModel();
    model.id=createUserDto.ID;
    model.name=createUserDto.name;
    model.email=createUserDto.email;
    model.password=createUserDto.password;

    return model.save();
  }
  findAll() :Promise<User[]>{
    return this.userModel.find().exec();
  }


  findOne(id: string):Promise<User> {
    return this.userModel.findById(id).exec();
  }


  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne( {_id : id},
      {
        id: updateUserDto.ID,
        name:updateUserDto.name,
        email:updateUserDto.email,
        password:updateUserDto.password
      }).exec();
  }


  remove(id: string) {
    return this.userModel.deleteOne({_id:id});
  }
}