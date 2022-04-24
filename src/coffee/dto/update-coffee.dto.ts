// export class UpdateCoffeeDto {
//     //?代表可选择的
//     private readonly name?: string;
//   private readonly brand?: string;
//   private readonly flavors?: string[];
// }

import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
