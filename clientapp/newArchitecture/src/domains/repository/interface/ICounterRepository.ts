import CounterEntities from "../../entities"

interface ICounterRepository { 
    create( entities:CounterEntities):CounterEntities
    get( entities:CounterEntities):number
    update( entities:CounterEntities):CounterEntities
    delete( entities:CounterEntities):CounterEntities
}

export default ICounterRepository