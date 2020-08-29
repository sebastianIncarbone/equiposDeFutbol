import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id:1,
            name: 'test 1',
            photo: 'https://picsum.photos/200/300'
        },
        {
            id:2,
            name: 'test 2',
            photo: 'https://picsum.photos/200'
        },
        {
            id:3,
            name: 'test 3',
            photo: 'https://picsum.photos/200/300/?blur'
        },
        {
            id:4,
            name: 'test 4',
            photo: 'https://picsum.photos/200/300?grayscale'
        }
    ],
    titulares: [],
    suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {

    if(action.type === "HACER_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(x=>x.id!==action.jugador.id) 
        }
    }

    if(action.type === "HACER_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(x=>x.id!==action.jugador.id) 
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter(x=>x.id!==action.jugador.id) 
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            titulares: state.titulares.filter(x=>x.id!==action.jugador.id) 
        }
    }

    return state;

};

export default createStore(reducerEntrenador);
