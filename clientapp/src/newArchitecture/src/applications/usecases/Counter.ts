import CounterEntities from "../../domains/entities";
import ICounterRepository from "../../domains/repository";

class Counter implements ICounterRepository {
    private _counter: CounterEntities;

    constructor(counterEntity: CounterEntities) {
        this._counter = counterEntity;
    }


    increament(count: number): void {
        const current = this._counter.get();
        this._counter.set(current + count); // Increase by count
    }

    decrement(count: number): void {
        const current = this._counter.get();
        this._counter.set(current - count); // Decrease by count
    }
}

export default Counter