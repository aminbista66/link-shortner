import { Injectable } from '@nestjs/common';
import { CreateShortnerDto } from './dto/create-shortner.dto';
import { UpdateShortnerDto } from './dto/update-shortner.dto';

@Injectable()
export class ShortnerService {
  create(createShortnerDto: CreateShortnerDto) {
    return 'This action adds a new shortner';
  }

  findAll() {
    return `This action returns all shortner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortner`;
  }

  update(id: number, updateShortnerDto: UpdateShortnerDto) {
    return `This action updates a #${id} shortner`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortner`;
  }
}
