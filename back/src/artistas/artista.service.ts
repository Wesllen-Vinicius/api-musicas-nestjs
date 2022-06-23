import { UptadeArtista } from './dto/update-artista.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from 'src/prisma/prisma.service';
import { CreateArtista } from './dto/create-artista.dto';

@Injectable()
export class ArtistaService {
  constructor(private dataService: DataService) {}

  async createArtista(artista: CreateArtista) {
    const artistaCreate = await this.dataService.artista.create({
      data: {
        ...artista,
      },
      select: {
        f_name: true,
        l_name: true,
      },
    });
    return artistaCreate;
  }
  async getArtistaById(artistaId: number) {
    const artistaGet = await this.dataService.artista.findUnique({
      where: {
        id: artistaId,
      },
      select: {
        f_name: true,
        l_name: true,
      },
    });
    return artistaGet;
  }

  async getArtistas() {
    return this.dataService.artista.findMany();
  }

  async updateArtista(artistaId: number, artistas: UptadeArtista) {
    const artistaExist = await this.dataService.artista.findUnique({
      where: {
        id: artistaId,
      },
    });
    if (!artistaExist) {
      throw new NotFoundException('Artist not found!');
    }
    return this.dataService.artista.update({
      where: {
        id: artistaId,
      },
      data: {
        ...artistas,
      },
      select: {
        f_name: true,
        l_name: true,
      },
    });
  }
  async deletArtista(artistaId: number) {
    const artistaExist = await this.dataService.artista.findUnique({
      where: {
        id: artistaId,
      },
    });
    if (!artistaExist) {
      throw new NotFoundException('Artista not Found!');
    }
    return this.dataService.artista.delete({
      where: {
        id: artistaId,
      },
      select: {
        f_name: true,
        l_name: true,
      },
    });
  }
}
