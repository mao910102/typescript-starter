import { Module } from '@nestjs/common';
import { ProductService } from '@app/product/product.service';
import { ProductController } from '@app/product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '@app/schemas/product.schema';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
})
export class ProductModule {}
