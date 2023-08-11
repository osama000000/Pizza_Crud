import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Restaurant } from "src/restaurant/schema/schema";



export type MenuDocument = menu & Document;
@Schema()
export class menu{
    @Prop()
    type: string;
    @Prop()
    price: string;
    @Prop()
    deals: String;
    @Prop()
    restaurantId: string
}
export const menuSchema = SchemaFactory.createForClass(menu)

