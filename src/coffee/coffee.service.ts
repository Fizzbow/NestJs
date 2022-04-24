/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'csl',
      brand: 'Buddy brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];
  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee= this.coffees.find((item) => item.id === +id);
    if(!coffee){
        throw new HttpException(`Coffee${id}not Found`,HttpStatus.NOT_FOUND)
    }
    return coffee;
  }
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
