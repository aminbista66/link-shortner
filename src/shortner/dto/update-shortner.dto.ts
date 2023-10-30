import { PartialType } from '@nestjs/mapped-types';
import { CreateShortnerDto } from './create-shortner.dto';

export class UpdateShortnerDto extends PartialType(CreateShortnerDto) {}
