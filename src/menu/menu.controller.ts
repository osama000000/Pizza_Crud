import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListMenuDto } from './dto/list-menu.dto';
import { menu } from './schema/menu';

@ApiTags('MENU MODULE')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  
  
  @Post(':restaurantId')
  @ApiOperation({summary: 'post menu details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        type:{
          type:'string',
          example: 'chinese', 
        },
        price:{
          type:'string',
          example: 'c200', 
        },
        deals:{
          type:'string',
          example: '50%', 
        },
        restaurantId:{
          type:'string',
          example: '50%', 
        }

      }
    }
  })
  @ApiResponse({
    status: 201, 
    description: 'all data list'
  })
  @Post(':restaurantId')
create(@Param('restaurantId') restaurantId: string, @Body() createMenuDto: CreateMenuDto) {
  return this.menuService.create(createMenuDto, restaurantId);
}




  @Get('list')
  @ApiOperation({summary: 'get menu details'})
  @ApiResponse({
    status: 200, 
    description: 'all data list'
  })
  @ApiResponse({
    status: 403, 
    description: 'forbiden'
  })
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'post menu details by ID'})
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'update menu details'})
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'delete menu details'})
  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
  // @Get('list')
  // async listMenus(@Query() query: ListMenuDto): Promise<menu[]> {
  //   const menus = await this.menuService.listMenus(); // Pass any query parameters if needed
  //   return menus;
  // }
}
