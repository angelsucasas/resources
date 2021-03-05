export abstract class ObjectAbstractRepository {  

  public async createObject(object):Promise<any>{}

  public async deleteObject(id):Promise<any>{}

  public async consultObject(id):Promise<any>{}

  public async updateObject(id,object){}

  public async replicateObject(){}

  public async restoreObject(){}
}