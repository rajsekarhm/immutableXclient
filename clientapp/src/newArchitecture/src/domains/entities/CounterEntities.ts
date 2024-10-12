
class CounterEntities {
    initial:any;
    constructor () {
        this.initial = 0
    }
    set(intitialState:number ) {
        this.initial = intitialState
    }
    get() : number {
        return this.initial
    }
}

export default CounterEntities;
