import CounterEntities from "../../domains/entities";
import ICounterRepository from "../../domains/repository";

class Counter implements ICounterRepository {
    _counter:number;
    constructor(private newCounter:number) {
        this._counter = newCounter
    }
    create(entities: CounterEntities): CounterEntities{
        entities.set(this._counter)
        return entities
    }
    get(entities: CounterEntities): number{
        //  this.entities.get()
        return entities.get()
    }
    update(entities: CounterEntities): CounterEntities {
        entities.set(this._counter)
        return entities
    }
    delete(entities: CounterEntities): CounterEntities{
        entities.set(this._counter)
        return entities
    } 
    increase(entities: CounterEntities,iterate:number): CounterEntities{
        entities.set(entities.initial + iterate)
        return entities 
    }
    /// builder here 
}


export default Counter