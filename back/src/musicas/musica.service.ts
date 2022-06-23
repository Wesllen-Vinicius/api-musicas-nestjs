import { UpdateMusica } from './dto/update-musica.dto';
import { CreateMusica } from './dto/create-musica.dto';
import { DataService } from '../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MusicaService {
  constructor(private dataService: DataService) {}

  async getMusicas() {
    const musicas = await this.dataService.musica.findMany({
      include: {
        Album: true,
        Artista: true,
      },
    });

    return musicas;
  }

  async getMusicaById(id: number) {
    const musica = await this.dataService.musica.findUnique({
      where: { id },
      select: { titulo: true },
    });
    if (!musica) {
      throw new NotFoundException('Music not found!');
    }
    return musica;
  }

  async createMusica(musica: CreateMusica) {
    try {
      const musicaCreate = await this.dataService.musica.create({
        data: {
          ...musica,
          ArtistaMusica: {
            create: {
              artistaId: musica.artistaId,
            },
          },
        },
        select: {
          titulo: true,
        },
      });
      return musicaCreate;
    } catch (e) {
      console.log(e);
    }
  }

  async updateMusica(musicaId: number, musica: UpdateMusica) {
    const musicaExist = await this.dataService.musica.findUnique({
      where: {
        id: musicaId,
      },
    });
    if (!musicaExist) {
      throw new NotFoundException('Music not found!');
    }
    return this.dataService.musica.update({
      where: {
        id: musicaId,
      },
      data: {
        ...musica,
      },
      select: {
        titulo: true,
      },
    });
  }

  async deletMusica(musicaId: number) {
    const musicExist = await this.dataService.musica.findUnique({
      where: {
        id: musicaId,
      },
    });
    if (!musicExist) {
      throw new NotFoundException('Music not found!');
    }
    return this.dataService.musica.delete({
      where: { id: musicaId },
      select: {
        titulo: true,
      },
    });
  }
}
