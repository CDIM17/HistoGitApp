import { Module } from '@nestjs/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';

@Module({
  imports: [CommitHistoryModule],
})
export class ModulesModule {}
