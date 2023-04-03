import { createStore, createDispatcher } from 'async-dispatcher';
import { updaterCard } from '@utils/updaterCard'

const storeCard = createStore({
  initialState: {}, // initial state of the store
  updaters: [ updaterCard ]
});

export const dispatcherCard = createDispatcher({storeCard : storeCard});
