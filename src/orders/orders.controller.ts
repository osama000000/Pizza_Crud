import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ORDER-MODULE')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  @ApiOperation({ summary: 'enter order details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'cxcve',
        },
        quantity: {
          type: 'string',
          example: '...',
        },
        address: {
          type: 'string',
          example: 'sdffgff',
        },
        currency: {
          type: 'string',
          example: 'sdffgff',
        },
        deliverybil: {
          type: 'string',
          example: 'sdffgff',
        }

      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'all data list'
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'get order details' })
  @ApiResponse({
    status: 200,
    description: 'all data list'
  })
  @ApiResponse({
    status: 403,
    description: 'forbiden'
  })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get data by id details' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update order details' })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete orderdetails' })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
