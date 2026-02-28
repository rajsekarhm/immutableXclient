// STORE

// import { configureStore } from '@reduxjs/toolkit';

// import { counterReducer } from './features/counter/Handler';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

// INDEX

// import * as React from 'react';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import store from './store';
// import { Provider } from "react-redux"
// import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//     <Provider store={store}>
//      <App  />
//     </Provider>
//   </StrictMode>
// );

// APP

// import * as React from 'react';
// import './style.css';
// import {useSelector} from "react-redux"
// import useCounterController from './features/counter/counterHooks';

// function CounterView() {
//   const controller = useCounterController();

//   const count = useSelector((state: any) => state.counter.value);

//   return (
//     <div>
//       <button onClick={() => controller.execute('increment')}>Increment</button>
//       <button onClick={() => controller.execute('decrement')}>Decrement</button>
//       <p>{count}</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <CounterView />
//     </div>
//   );
// }

// HOOKS

// import CounterRepository from './Repository';
// import CounterService from './Service';
// import CounterController from './Controller';
// import * as React from 'react';

// function useCounterController(initialValue = 0) {
//   const controller = React.useMemo(() => {
//     const repo = new CounterRepository(initialValue);
//     const service = new CounterService(repo);
//     return new CounterController(service);
//   }, []);
//   return controller;
// }

// export default useCounterController;

// REDUCER

// export const COUNTER_INCREMENT = 'counter/increment';
// export const COUNTER_DECREMENT = 'counter/decrement';
// export const COUNTER_SET = 'counter/set';

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// export function counterReducer(state = initialState, action: any): CounterState {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       return { ...state, value: state.value + 1 };
//     case COUNTER_DECREMENT:
//       return { ...state, value: state.value - 1 };
//     case COUNTER_SET:
//       return { ...state, value: action.payload };
//     default:
//       return state;
//   }
// }

// export const increment = () => ({ type: COUNTER_INCREMENT });
// export const decrement = () => ({ type: COUNTER_DECREMENT });
// export const setValue = (val: number) => ({ type: COUNTER_SET, payload: val });

// CONTROLLER

// import CounterService from './Service';
// class CounterController {
//   constructor(private counterService: CounterService) {}

//   execute(type: string) {
//     console.log('calling from controller -> ');
//     switch (type) {
//       case 'increment':
//         this.counterService.incrementCount();
//         break;
//       case 'decrement':
//         this.counterService.decrementCount();
//         break;
//       default:
//         return {};
//     }
//   }
// }

// export default CounterController;

// SERVICE

// import CounterRepository from './Repository';

// class CounterService {
//   constructor(private counterRepository: CounterRepository) {}

//   incrementCount() {
//     console.log('calling from service ->');

//     if (this.counterRepository.getCount() > 1) {
//       this.counterRepository.saveIncrement();
//     }
//   }

//   decrementCount() {
//     console.log('calling from service');
//     if (this.counterRepository.getCount() > 0) {
//       this.counterRepository.saveDecrement();
//     }
//   }
// }

// export default CounterService;

// REPOSITORY

// import { Store } from 'redux';
// import { increment, decrement, setValue } from './Handler';

// class CounterRepository {
//   constructor(private store: Store) {}

//   getCount(): number {
//     console.log('calling from repository ->', { count: this.store });
//     const state = this.store.getState();
//     return state.counter.value;
//   }

//   saveIncrement() {
//     this.store.dispatch(increment());
//   }

//   saveDecrement() {
//     this.store.dispatch(decrement());
//   }

//   // Extra: In prod, you often need to set a specific value from an API
//   persistValue(val: number) {
//     this.store.dispatch(setValue(val));
//   }
// }

// export default CounterRepository;
