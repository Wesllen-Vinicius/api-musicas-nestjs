import { UpdateMusica } from './dto/update-musica.dto';
import { CreateMusica } from './dto/create-musica.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MusicaService } from './musica.service';

@Controller('musicas')
export class MusicaController {
  constructor(private readonly musicaService: MusicaService) {}

  @Get()
  getMusicas() {
    return this.musicaService.getMusicas();
  }

  @Get(':musicaId')
  getmusica(@Param('musicaId') musicaId: number) {
    return this.musicaService.getMusicaById(musicaId);
  }

  @Post()
  createMusica(@Body() dto: CreateMusica) {
    return this.musicaService.createMusica(dto);
  }

  @Put(':musicaId')
  updateMusica(
    @Param('musicaId', ParseIntPipe) musicaId: number,
    @Body() musicaData: UpdateMusica,
  ) {
    return this.musicaService.updateMusica(musicaId, musicaData);
  }

  @Delete(':musicaId')
  deleteMusica(@Param('musicaId', ParseIntPipe) musicaId: number) {
    return this.musicaService.deletMusica(musicaId);
  }
}
