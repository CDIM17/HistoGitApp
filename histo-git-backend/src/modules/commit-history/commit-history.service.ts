import { Injectable } from '@nestjs/common';
import { CreateCommitHistoryDto } from './dto/create-commit-history.dto';
import { UpdateCommitHistoryDto } from './dto/update-commit-history.dto';

@Injectable()
export class CommitHistoryService {
  create(createCommitHistoryDto: CreateCommitHistoryDto) {
    return 'This action adds a new commitHistory';
  }

  findAll() {
    return `This action returns all commitHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commitHistory`;
  }

  update(id: number, updateCommitHistoryDto: UpdateCommitHistoryDto) {
    return `This action updates a #${id} commitHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} commitHistory`;
  }
}
