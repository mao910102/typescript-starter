import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  nombre: string;

  @Prop()
  tipo: string;

  @Prop()
  cantidadActual: number;

  @Prop()
  cantidadMinima: number;

  @Prop()
  valorUnitario: number;

  @Prop()
  unidadesVendidas: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
