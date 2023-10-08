import { Module } from '@nestjs/common';
import { CommitHistoryService } from './commit-history.service';
import { CommitHistoryController } from './commit-history.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from 'src/common/common.module';
import { BaseService } from 'src/common/base/base.service';

@Module({
  imports: [HttpModule, CommonModule],
  controllers: [CommitHistoryController],
  providers: [CommitHistoryService, BaseService],
})
export class CommitHistoryModule {}
