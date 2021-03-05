import { Injectable } from '@nestjs/common';
import {ObjectAbstractRepository} from '../repository/object-manipulator.abstract.repository'

@Injectable()
export class ObjectManipulatorService {

	async createObject(){}

	async deleteObject(){}

	async updateObject(){}

	async getObjects(){}

	async replicateObject(){}

	async restoreObject(){}
}