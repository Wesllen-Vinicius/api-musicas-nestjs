import { MusicaService } from './musica.service';
import { MusicaController } from './musica.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MusicaController],
  providers: [MusicaService],
})
export class MusicasModule {}
