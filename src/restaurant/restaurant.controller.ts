import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Restaurant-Module')
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  @ApiOperation({summary:'enter details for restaurant'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        name:{
          type:'string',
          example: 'chinese', 
        },
        location:{
          type:'string',
          example: 'i9-mkz', 
        },
        
      }
    }
  })
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  @ApiOperation({summary:'get All details for restaurant'})
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'get by id details for restaurant'})
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'update details for restaurant'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        name:{
          type:'string',
          example: 'kfc', 
        },
        location:{
          type:'string',
          example: 'i8-markaz', 
        },
        
      }
    }
  })
  update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'delete details for restaurant'})
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
