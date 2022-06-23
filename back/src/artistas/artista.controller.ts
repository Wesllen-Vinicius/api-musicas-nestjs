import { CreateArtista } from './dto/create-artista.dto';
import { ArtistaService } from './artista.service';
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
import { UptadeArtista } from './dto';

@Controller('artistas')
export class ArtistaControler {
  constructor(private artistaService: ArtistaService) {}

  @Post()
  createArtista(@Body() dto: CreateArtista) {
    return this.artistaService.createArtista(dto);
  }

  @Get()
  getArtistas() {
    return this.artistaService.getArtistas();
  }

  @Get(':artistaId')
  getArtistaById(@Param('artistaId', ParseIntPipe) artistaId: number) {
    return this.artistaService.getArtistaById(artistaId);
  }

  @Put(':artistaId')
  updateArtista(
    @Param('artistaId', ParseIntPipe) artistaId: number,
    @Body() artistaData: UptadeArtista,
  ) {
    return this.artistaService.updateArtista(artistaId, artistaData);
  }

  @Delete(':artistaId')
  deleteArtista(@Param('artistaId', ParseIntPipe) artistaId: number) {
    return this.artistaService.deletArtista(artistaId);
  }
}
