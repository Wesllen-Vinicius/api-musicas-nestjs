import { ArtistaControler } from './artista.controller';
import { ArtistaService } from './artista.service';
import { Module } from '@nestjs/common';
@Module({
  providers: [ArtistaService],
  controllers: [ArtistaControler],
})
export class ArtistaModule {}
