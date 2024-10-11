import CounterEntities from "../../domains/entities";
import AbstratUseCase from "./AbstractUseCase";
import Counter from "./Counter";

class CounterUseCase implements AbstratUseCase {
    public execute(entities: any): void {
        throw new Error("Method not implemented.");
    }
    public increament( ) : void { 
        const entities = new CounterEntities()
        const counter = new Counter(0)
        counter.increase(entities,1)
    }
} 