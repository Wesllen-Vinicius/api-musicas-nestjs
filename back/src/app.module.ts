import { AlbumModule } from './albuns/album.module';
import { UsersModule } from './users/users.module';
import { DataModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MusicasModule } from './musicas/musica.module';
import { ArtistaModule } from './artistas/artista.module';

@Module({
  imports: [MusicasModule, DataModule, UsersModule, ArtistaModule, AlbumModule],
})
export class AppModule {}
