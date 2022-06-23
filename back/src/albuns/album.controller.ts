import { CreateAlbum } from './dto/create-album';
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
import { AlbumService } from './album.service';
import { UpdateAlbum } from './dto';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAlbus() {
    return this.albumService.getAlbuns();
  }

  @Get(':albumId')
  getAlbum(@Param('albumId') albumId: number) {
    return this.albumService.getAlbumById(albumId);
  }

  @Post()
  createAlbum(@Body() dto: CreateAlbum) {
    return this.albumService.createAlbum(dto);
  }

  @Put(':albumId')
  updateAlbum(
    @Param('albumId', ParseIntPipe) albumId: number,
    @Body() albumData: UpdateAlbum,
  ) {
    return this.albumService.updateAlbum(albumId, albumData);
  }

  @Delete(':albumId')
  deleteAlbum(@Param('albumId', ParseIntPipe) albumId: number) {
    return this.albumService.deletAlbum(albumId);
  }
}
