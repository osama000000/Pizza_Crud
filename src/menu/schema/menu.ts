import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type MenuDocument = menu & Document;
@Schema()
export class menu{
    @Prop()
    type: string;
    @Prop()
    price: string;
    @Prop()
    deals: String;

}
export const menuSchema = SchemaFactory.createForClass(menu)

