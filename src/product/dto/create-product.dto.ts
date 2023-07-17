import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  tipo: string;
  @ApiProperty()
  cantidadActual: number;
  @ApiProperty()
  cantidadMinima: number;
  @ApiProperty()
  valorUnitario: number;
  @ApiProperty()
  unidadesVendidas: number;
}
