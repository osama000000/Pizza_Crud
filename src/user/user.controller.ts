import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user module')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: 'get user details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        id:{
          type:'string',
          example: '1', 
        },
        name:{
          type:'string',
          example: 'xcj', 
        },
        email:{
          type:'string',
          example: 'sdsfd@.com', 
        },
        password:{
          type:'string',
          example: '123', 
        }
      }
    }
  })
  @ApiResponse({
    status: 201, 
    description: 'all data list'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary: 'get all user details'})
  @ApiResponse({
    status: 200, 
    description: 'all data list'
  })
  @ApiResponse({
    status: 403, 
    description: 'forbiden'
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'get by id details'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'update user details'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'delete user details'})
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
