import CounterEntities from "../../domains/entities";
import AbstratUseCase from "./AbstractUseCase";
import Counter from "./Counter";

class CounterUseCase implements AbstratUseCase {
    private counter: Counter;

    constructor(counterEntity: CounterEntities) {
        this.counter = new Counter(counterEntity); // Inject the entity
    }

    public execute(entities: any): void {
        throw new Error("Method not implemented.");
    }

    public increase(): number {
        this.counter.increament(1); // Increment by 1
        return this.counter["_counter"].get();
    }

    public decrease(): number {
        this.counter.decrement(1); // Decrement by 1
        return this.counter["_counter"].get();
    }
}

export default CounterUseCase