import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type MenuDocument = order & Document;
@Schema()
export class order {
    @Prop()
    name: string;
    @Prop()
    quantity: string;
    @Prop()
    address: String;
    @Prop()
    currency: string;
    @Prop()
    deliverybill: string;

}
export const orderSchema = SchemaFactory.createForClass(order)

