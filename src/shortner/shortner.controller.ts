import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { CreateShortnerDto } from './dto/create-shortner.dto';
import { UpdateShortnerDto } from './dto/update-shortner.dto';

@Controller('shortner')
export class ShortnerController {
  constructor(private readonly shortnerService: ShortnerService) {}

  @Post()
  create(@Body() createShortnerDto: CreateShortnerDto) {
    return this.shortnerService.create(createShortnerDto);
  }

  @Get()
  findAll() {
    return this.shortnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortnerDto: UpdateShortnerDto) {
    return this.shortnerService.update(+id, updateShortnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortnerService.remove(+id);
  }
}
