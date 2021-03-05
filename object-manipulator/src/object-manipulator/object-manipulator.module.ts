import { Module } from '@nestjs/common';
import { ObjectManipulatorController } from './controller/object-manipulator.controller'
import { ObjectManipulatorService } from './service/object-manipulator.service'
import { ObjectManipulatorRepository } from './repository/object-manipulator.repository'
@Module({
	imports: [],
	controllers: [ObjectManipulatorController],
	providers: [ObjectManipulatorService,ObjectManipulatorRepository],
})
export class ObjectManipulatorModule {}
