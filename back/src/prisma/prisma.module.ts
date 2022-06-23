import { DataService } from './prisma.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({ providers: [DataService], exports: [DataService] })
export class DataModule {}
