import { Test, TestingModule } from '@nestjs/testing';
import { ObjectManipulatorService } from './object-manipulator.service';

describe('ObjectManipulatorService', () => {
  let service: ObjectManipulatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectManipulatorService],
    }).compile();

    service = module.get<ObjectManipulatorService>(ObjectManipulatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
