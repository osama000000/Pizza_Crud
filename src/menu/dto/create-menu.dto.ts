// create-menu.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsNumber()
  deals: string;

  @IsNotEmpty()
  @IsString()
  restaurantId: string;
}
