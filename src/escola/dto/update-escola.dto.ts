import { PartialType } from '@nestjs/mapped-types';
import { CreateEscolaDto } from './create-escola.dto';

export class UpdateEscolaDto extends PartialType(CreateEscolaDto) {}
