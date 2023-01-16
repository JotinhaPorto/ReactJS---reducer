import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Person = {
    id: string;
    name: string;
}
type ActionType = {
    type: string;
    payload?: {
        name?: string;
        id?: string;
    }
}



const initialState: Person[] = []

const reducer = (state: Person[], action: ActionType) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload?.name) {
                let newState = [...state]
                newState.push({
                    id: uuidv4(),
                    name: action.payload?.name
                });
                return newState
            }
        case 'REMOVE':
            if (action.payload?.id) {
                let newState = [...state]
                newState = state.filter(item => item.id !== action.payload?.id);
                return newState
            }
        case 'ORDER':
            let newState = [...state]
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1)
            return newState
    }
    return state;
}

export const usePeopleList = () => {
    return useReducer(reducer, initialState)
}



// Neste exercicio temos que instalar uma biblioteca que gera um "hash", um número aleatório para atribuir como id do usuario, comando terminal: 1- npm install uuid , 2- npm install -D @types/uuid . Após isso temos que importar {v4} from 'uuid', a "v4" é a que gera números aleatorios
// payload armazena dados enviado pelo usuário, nós obtemos esses dados através do payload 