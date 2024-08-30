import { PartialType } from '@nestjs/mapped-types';
import { CreateChamadaDto } from './create-chamada.dto';

export class UpdateChamadaDto extends PartialType(CreateChamadaDto) {}
