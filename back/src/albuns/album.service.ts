import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from 'src/prisma/prisma.service';
import { UpdateAlbum } from './dto';
import { CreateAlbum } from './dto/create-album';

@Injectable()
export class AlbumService {
  constructor(private dataService: DataService) {}

  async getAlbuns() {
    const albuns = await this.dataService.album.findMany();
    return albuns;
  }

  async getAlbumById(id: number) {
    const album = await this.dataService.album.findUnique({
      where: { id },
      select: { nome_album: true },
    });
    return album;
  }

  async createAlbum(album: CreateAlbum) {
    const albumCreate = await this.dataService.album.create({
      data: {
        ...album,
      },
      select: {
        nome_album: true,
        date_created: true,
      },
    });
    return albumCreate;
  }

  async updateAlbum(albumId: number, album: UpdateAlbum) {
    const albumExist = await this.dataService.album.findUnique({
      where: {
        id: albumId,
      },
    });
    if (!albumExist) {
      throw new NotFoundException('Album not found!');
    }
    return this.dataService.album.update({
      where: {
        id: albumId,
      },
      data: {
        ...album,
      },
      select: {
        nome_album: true,
      },
    });
  }

  async deletAlbum(albumId: number) {
    const albumExist = await this.dataService.album.findUnique({
      where: {
        id: albumId,
      },
    });
    if (!albumExist) {
      throw new NotFoundException('Album not found!');
    }
    return this.dataService.album.delete({
      where: { id: albumId },
      select: { nome_album: true },
    });
  }
}
