import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '@app/product/dto/create-product.dto';
import { UpdateProductDto } from '@app/product/dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '@app/schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
