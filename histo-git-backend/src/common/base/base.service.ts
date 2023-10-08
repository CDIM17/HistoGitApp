// base.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {
  constructor(protected httpService: HttpService) {}

  fetchData(url: string) {
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
