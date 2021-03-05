import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectManipulatorModule } from './object-manipulator/object-manipulator.module';

@Module({
  imports: [ObjectManipulatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
