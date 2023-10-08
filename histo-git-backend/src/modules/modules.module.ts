import { Module } from '@nestjs/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommitHistoryModule, CommonModule],
})
export class ModulesModule {}
