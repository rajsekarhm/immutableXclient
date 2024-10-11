
class CounterEntities {
    initial:any;
    set(intitialState:number ) {
        this.initial = intitialState
    }

    get() : number {
        return this.initial
    }
}

export default CounterEntities;
