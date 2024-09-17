export type _response = any

interface entities{ 
     createEntities(endPoint:string,body?:any,headers?:any) : _response;
     getEntities(endPoint:string,body?:any,headers?:any) : _response;
     updateEntities(endPoint:string,body?:any,headers?:any): _response;
     deleteEntities(endPoint:string,body?:any,headers?:any):_response
}

export default entities
