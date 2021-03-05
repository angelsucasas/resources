export interface BaseInterfaceRepository{
	createObject(object): Promise<any>;

  	deleteObject(id):Promise<any>

  	consultObject(id):Promise<any>

  	updateObject(id,object):Promise<any>

  	replicateObject():Promise<any>

  	restoreObject():Promise<any>
}