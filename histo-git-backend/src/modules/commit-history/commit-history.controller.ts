import { Controller, Get } from '@nestjs/common';
import { CommitHistoryService } from './commit-history.service';

@Controller('commit-history')
export class CommitHistoryController {
  constructor(private readonly commitHistoryService: CommitHistoryService) {}

  @Get()
  findAll() {
    return this.commitHistoryService.findAll();
  }
}
