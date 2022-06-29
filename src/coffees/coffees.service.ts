import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Tchibo',
      brand: 'Nescafe',
      flavors: ['choco', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.filter((coffee) => coffee.id === id);
  }

  create(body: any) {
    return this.coffees.push(body);
  }

  update(id: string, body: any) {
    const existingCoffee = this.findOne(id);
    // if (existingCoffee) {

    // }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
