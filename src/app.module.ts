import { Module } from '@nestjs/common';
import { AppService } from '@app/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { mongoosePropertyConverter } from '@app/infra/mongoose/mongoose-property-convert';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@app/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DNS, {
      connectionFactory: (connection: Connection) => {
        connection.plugin(mongoosePropertyConverter);
        return connection;
      },
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
