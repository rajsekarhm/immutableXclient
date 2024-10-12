interface IEntities<T> { 
    getEntities(entities:number | string):void
    updateEntities(entities:T):void
}

export default IEntities