import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
@Module({
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
