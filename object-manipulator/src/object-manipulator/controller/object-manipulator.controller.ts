import { Controller, Post, Get, Delete, Body, Res,HttpStatus } from '@nestjs/common';
import { ObjectManipulatorService } from '../service/object-manipulator.service'
import { ObjectManipulatorRepository } from '../repository/object-manipulator.repository'
import { Response } from 'express';

@Controller('object-manipulator')
export class ObjectManipulatorController {
	constructor(
		private readonly objectManipulatorRepository:ObjectManipulatorRepository
	){}

	@Post('')
	async SaveObject(
		@Res() res: Response,
		@Body() body: any
	) {
		try{
			const response = await this.objectManipulatorRepository.createObject(body)
			return res.status(HttpStatus.OK).send(response);
		}catch(e){
			return res.status(HttpStatus.BAD_REQUEST).send(JSON.stringify(e.message));
		}		
	}

	@Post('find')
	async getObject(
		@Res() res: Response,
		@Body() body: any
	) {
		try{
			const response = await this.objectManipulatorRepository.consultObject(body.key)
			return res.status(HttpStatus.OK).send(response);
		}catch(e){
			return res.status(HttpStatus.BAD_REQUEST).send(JSON.stringify(e.message));
		}		
	}

	@Delete('')
	async DeleteObject(
		@Res() res: Response,
		@Body() body: any
	) {
		try{
			const response = await this.objectManipulatorRepository.deleteObject(body.key)
			return res.status(HttpStatus.OK).send(response);
		}catch(e){
			return res.status(HttpStatus.BAD_REQUEST).send(JSON.stringify(e.message));
		}		
	}
}
