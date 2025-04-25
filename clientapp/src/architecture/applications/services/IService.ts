class Service{
    repository : any
    entities:any
    constructor(_entity:any,repo:any){
        this.entities = _entity
        this.repository = repo
    }
}


export default Service