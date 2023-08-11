import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
export type RestaurantDocument = Restaurant & Document;
@Schema()
export class Restaurant{
    @Prop()

    name: string;
    @Prop()
    location: string;


}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);