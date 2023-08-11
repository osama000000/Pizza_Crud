import { Schema, SchemaTypes, model } from 'mongoose';

const MenuSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  restaurant: { type: SchemaTypes.ObjectId, ref: 'Restaurant' },
  // other fields
});

export const Menu = model('Menu', MenuSchema);