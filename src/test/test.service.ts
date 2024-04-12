import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }
}
