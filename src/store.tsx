import { createStore } from 'redux';

interface InitialState {
    count: number;
};

const initialState : InitialState = { count: 0 };

export const increment = () : { type: string } => {

    printCount();

    if ( store.getState().count >= 10 ) {
        alert("Count has reached 10, cannot increment further!");
        unsubscribe();
    }

    return { type: 'increment' };
};

export const decrement = () : { type: string } => {

    printCount();

    if ( store.getState().count <= -10 ) {
        alert("Count has reached -10, cannot increment further!");
        unsubscribe();
    }

    return { type: 'decrement' };
};

const countReducer = ( state = initialState, action: { type: string } ) : InitialState => {

    switch ( action.type ) {

        case 'increment' :
            return { count: state.count + 1 };

        case 'decrement' :
            return { count: state.count - 1 };

        default :
            return { ...state };

    }

};

export const store = createStore( countReducer );

const printCount = () : void => {
    console.log(`Current count is: ${store.getState().count}`);
};

const unsubscribe = store.subscribe(printCount);
