import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';

@Controller('escola')
export class EscolaController {
  constructor(private readonly escolaService: EscolaService) {}

  @Post()
  create(@Body() createEscolaDto: CreateEscolaDto) {
    return this.escolaService.create(createEscolaDto);
  }

  @Get()
  findAll() {
    return this.escolaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escolaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscolaDto: UpdateEscolaDto) {
    return this.escolaService.update(+id, updateEscolaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escolaService.remove(+id);
  }
}
