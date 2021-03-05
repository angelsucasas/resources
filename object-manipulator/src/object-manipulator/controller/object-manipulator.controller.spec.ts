import { Test, TestingModule } from '@nestjs/testing';
import { ObjectManipulatorController } from './object-manipulator.controller';

describe('ObjectManipulatorController', () => {
  let controller: ObjectManipulatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectManipulatorController],
    }).compile();

    controller = module.get<ObjectManipulatorController>(ObjectManipulatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
